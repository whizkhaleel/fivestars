const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const body_parser = require("body-parser");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;

const buildPath = path.join(__dirname, "build");
const app = express();
app.use("/", express.static(buildPath));
app.use(cors());
app.use(body_parser.json());

const { MongoClient, ObjectID } = require("mongodb");
const URI =
  "mongodb+srv://fivestarsds:Gwandu1122@cluster0.mccdvlg.mongodb.net/?retryWrites=true&w=majority";

const getMonnifyAccessToken = async () => {
  const API_Key = "MK_TEST_ANYNZX3EVQ";
  const Secret_Key = "TDSDUNGKU3M367PPPS9MVMHDMVV4UQ8X";

  const authHeader = `Basic ${Buffer.from(API_Key + ":" + Secret_Key).toString(
    "base64"
  )}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: authHeader,
  };

  return axios
    .post("https://sandbox.monnify.com/api/v1/auth/login", {}, { headers })
    .then((response) => {
      const responseBody = response.data.responseBody;
      const accessToken = responseBody.accessToken;
      return accessToken;
    })
    .catch((error) => {
      throw new Error("Error:", error.message);
    });
};

const createReservedBankAccount = async (
  accessToken,
  ref,
  customerName,
  customerEmail,
  username
) => {
  try {
    const userData = {
      accountReference: ref,
      accountName: username,
      currencyCode: "NGN",
      contractCode: "8834841014",
      customerEmail: customerEmail,
      customerName: customerName,
      getAllAvailableBanks: true,
    };

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      "https://sandbox.monnify.com/api/v1/bank-transfer/reserved-accounts",
      userData,
      { headers }
    );
    return response.data.responseBody;
  } catch (error) {
    console.error("Error:", error);
  }
};

const saveAccount = async (user_id, reservedAccount) => {
  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const collection = database.collection("user_account");

    const accountInfo = {
      user_id: user_id,
      balance: 0,
      total_fund: 0,
      bank_name: reservedAccount.bankName,
      account_number: reservedAccount.accountNumber,
    };

    return await collection.insertOne(accountInfo);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.post("/api/register", async (req, res) => {
  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const collection = database.collection("users");

    const { firstname, lastname, email, phone, username, password } = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const existingUser = await collection.findOne({
      $or: [{ username: username }, { phone_no: phone }, { email: email }],
    });

    if (existingUser) {
      res.json({
        message: "Username, Phone, or Email already exist.",
        error: "User already registered",
      });
      return;
    }

    const newUser = {
      f_name: firstname,
      l_name: lastname,
      email: email,
      phone_no: phone,
      username: username,
      password: hashedPassword,
      salt: salt,
      user_role: 2,
      date_created: Date(),
    };

    const result = await collection.insertOne(newUser);

    if (result) {
      const accessToken = await getMonnifyAccessToken();
      const ref = result.insertedId;
      const reserveAccount = await createReservedBankAccount(
        accessToken,
        ref,
        newUser.f_name + "" + newUser.f_name,
        newUser.email,
        newUser.username
      );

      saveAccount(ref, reserveAccount);

      console.log(reserveAccount);
      res.status(201).json({ message: "Your registration is successful" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.post("/api/login", async (req, res) => {
  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const collection = database.collection("users");

    const { username, password } = req.body;

    const user = await collection.findOne({ username: username });

    if (!user) {
      res.json({
        message: "Invalid Login credentials!",
      });
      return;
    }

    const storedHashedPassword = user.password;
    const storedSalt = user.salt;
    const hashedEnteredPassword = await bcrypt.hash(password, storedSalt);
    const isPasswordMatch = hashedEnteredPassword === storedHashedPassword;

    if (isPasswordMatch) {
      const secretKey = crypto.randomBytes(32).toString("hex");
      const payload = {
        userID: user._id,
        userRole: user.user_role,
      };
      const expiration = Math.floor(Date.now() / 1000) + 30 * 60;
      const token = jwt.sign(payload, secretKey, {
        expiresIn: expiration,
      });

      res.status(201).json({ message: "Login successful!", token });
    } else {
      res.json({
        message: "Invalid Login credentials!",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error." });
  } finally {
    await client.close();
  }
});

app.post("/api/user/:userID", async (req, res) => {
  const userID = req.params.userID;

  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const users = database.collection("users");
    const user_account = database.collection("user_account");

    const userInfo = await users.findOne({
      _id: new ObjectId(userID),
    });

    const accountInfo = await user_account.findOne({
      user_id: new ObjectId(userID),
    });

    if (userInfo && accountInfo) {
      const userData = { userInfo, accountInfo };
      res.status(201).json(userData);
    } else {
      res.status(404).json({ message: "No user found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.post("/webhooks/monnify/payment", async (req, res) => {});
app.post("/webhooks/monnify/refund", async (req, res) => {});

app.set("port", 3000);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
