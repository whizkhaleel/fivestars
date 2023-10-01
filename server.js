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

const { MongoClient } = require("mongodb");
const URI =
  "mongodb+srv://fivestarsds:Gwandu1122@cluster0.mccdvlg.mongodb.net/?retryWrites=true&w=majority";

const contractCode = "677548149066";
const API_URL = "https://api.monnify.com";

const currentTime = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return `${month} ${day}, ${year} ${formattedHours}:${
    (minutes < 10 ? "0" : "") + minutes
  } ${ampm}`;
};

const getMonnifyAccessToken = async () => {
  const API_Key = "MK_PROD_45A2V7WMZZ";
  const Secret_Key = "KKYAT9AV1WMUFCGT4034BAKWC578CYU7";

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
  accountName
) => {
  try {
    const userData = {
      accountReference: ref,
      accountName: accountName,
      currencyCode: "NGN",
      contractCode: contractCode,
      customerEmail: customerEmail,
      customerName: customerName,
      getAllAvailableBanks: true,
    };

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      `${API_URL}/api/v2/bank-transfer/reserved-accounts`,
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
      account_name: reservedAccount.accounts[0].accountName,
      balance: "0.00",
      total_fund: "0.00",
      wema_bank: reservedAccount.accounts[0].accountNumber,
      sterling_bank: reservedAccount.accounts[1].accountNumber,
      moniepoint_mfb: reservedAccount.accounts[2].accountNumber,
    };

    return await collection.insertOne(accountInfo);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};
const UpdateDatabase = async (ref, amount, customerEmail, paymentStatus) => {
  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const users = database.collection("users");
    const accounts = database.collection("user_account");
    const walletHistory = database.collection("wallet_history");
    const transactions = database.collection("user_transactions");

    const user = await users.findOne({ email: customerEmail });
    const userID = user._id;

    const user_account = await accounts.findOne({
      user_id: new ObjectId(userID),
    });
    const prevBal = Number(user_account.balance);
    const totalFund = Number(user_account.total_fund);

    const date = currentTime();
    const walletData = {
      user_id: userID,
      ref: ref,
      amount: amount,
      prev_balance: prevBal,
      new_balance: prevBal + amount,
      status: paymentStatus,
      paidOn: date,
    };

    const updateAccount = {
      $set: {
        balance: prevBal + amount,
        total_fund: totalFund + amount,
      },
    };

    const transactionData = {
      user_id: userID,
      ref: ref,
      product: "Monnify Wallet Funding",
      amount: amount,
      prev_balance: prevBal,
      new_balance: prevBal + amount,
      paidOn: date,
    };

    const wallet = await walletHistory.insertOne(walletData);
    const update = await accounts.updateOne(
      { user_id: new ObjectId(userID) },
      updateAccount
    );
    const trans = await transactions.insertOne(transactionData);

    if (wallet && update && trans) {
      return console.log("Success");
    } else {
      console.error("Error");
    }
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
        newUser.f_name + " " + newUser.l_name,
        newUser.email,
        newUser.f_name
      );

      saveAccount(ref, reserveAccount);

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
    const transactions = database.collection("user_transactions");

    const userInfo = await users.findOne({
      _id: new ObjectId(userID),
    });

    const accountInfo = await user_account.findOne({
      user_id: new ObjectId(userID),
    });

    const transInfo = await transactions
      .find({
        user_id: new ObjectId(userID),
      })
      .sort({ _id: -1 })
      .toArray();

    if (userInfo && accountInfo && transInfo) {
      const userData = { userInfo, accountInfo, transInfo };
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

app.post("/api/user/wallet/:userID", async (req, res) => {
  const userID = req.params.userID;

  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const user_account = database.collection("user_account");

    const accountInfo = await user_account.findOne({
      user_id: new ObjectId(userID),
    });

    if (accountInfo) {
      res.status(201).json(accountInfo);
    } else {
      res.status(404).json({ message: "No user account found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.post("/api/user/transactions/:userID", async (req, res) => {
  const userID = req.params.userID;

  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const transactions = database.collection("user_transactions");

    const recordInfo = transactions.find({
      user_id: new ObjectId(userID),
    });

    if (recordInfo) {
      res.status(201).json(recordInfo);
    } else {
      res.status(404).json({ message: "No user account found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.post("/api/monnify/settings", async (req, res) => {
  const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("vtu_db");
    const collection = database.collection("monnify_settings");

    const { api_key, secret_key, contract_code, top_up_charges } = req.body;

    const existingRecord = await collection.findOne({
      $or: [
        { api_key: api_key },
        { secret_key: secret_key },
        { contract_code: contract_code },
      ],
    });

    const MonnifySettings = {
      api_key: api_key,
      secret_key: secret_key,
      contract_code: contract_code,
      topUp_charges: top_up_charges,
      date_created: currentTime(),
    };

    if (existingRecord) {
      const updateRecord = {
        $set: {
          api_key: api_key,
          secret_key: secret_key,
          contract_code: contract_code,
          topUp_charges: top_up_charges,
          date_created: currentTime(),
        },
      };

      const update = await collection.updateOne(
        { secret_key: secret_key },
        updateRecord
      );
      if (update) {
        res.status(201).json({ message: "Record updated successfully" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      const result = await collection.insertOne(MonnifySettings);

      if (result) {
        res.status(201).json({ message: "Record saved successfully" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
});

app.post("/webhook/monnify", async (req, res) => {
  try {
    const sha512 = require("js-sha512").sha512;
    const receivedSignature = req.headers["monnify-signature"];

    const DEFAULT_MERCHANT_CLIENT_SECRET = "KKYAT9AV1WMUFCGT4034BAKWC578CYU7";

    const computeHash = (requestBody) => {
      const result = sha512.hmac(DEFAULT_MERCHANT_CLIENT_SECRET, requestBody);
      return result;
    };

    const stringifiedBody = JSON.stringify(req.body);
    const computedHash = computeHash(stringifiedBody);

    if (receivedSignature === computedHash) {
      const webhookData = req.body;

      switch (webhookData.eventType) {
        case "SUCCESSFUL_TRANSACTION":
          const ref = webhookData.eventData.transactionReference;
          const amount = webhookData.eventData.settlementAmount;
          const customerEmail = webhookData.eventData.customer.email;
          const status = webhookData.eventData.paymentStatus;

          UpdateDatabase(ref, Number(amount), customerEmail, status);

          break;

        default:
          console.log(
            "Received unsupported webhook event:",
            webhookData.eventType
          );
      }

      res.status(200).send("Webhook received and authenticated successfully");
    } else {
      console.log("Received invalid webhook request. Signatures do not match.");
      res.status(403).send("Forbidden");
    }
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("Internal server error");
  }
});

app.set("port", 3000);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
