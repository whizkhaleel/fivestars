const axios = require("axios");

const API_Key = "MK_TEST_QPXFRE5GGB";
const Secret_Key = "S83Y15MG9ZASJ266VC4XU5AGPDNMY4GR";

const authHeader = `Basic ${Buffer.from(API_Key + ":" + Secret_Key).toString(
  "base64"
)}`;

const headers = {
  "Content-Type": "application/json",
  Authorization: authHeader,
};

axios
  .post("https://sandbox.monnify.com/api/v1/auth/login", {}, { headers })
  .then((response) => {
    const responseBody = response.data.responseBody;
    const accessToken = responseBody.accessToken;
    console.log(accessToken);

    // Further processing...
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
