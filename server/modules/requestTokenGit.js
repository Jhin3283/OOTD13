const axios = require("axios");
const clientId = process.env.GITHUB_CLIENT_ID;
const ClientSecret = process.env.GITHUB_CLIENT_SECRET;
require("dotenv").config();

module.exports = async (authorizationCode) => {
  const url = "https://github.com/login/oauth/access_token";
  const param = {
    client_id: clientId,
    client_secret: ClientSecret,
    code: authorizationCode,
  };
  const token = await axios.post(url, param, {
      headers: { Accept: "application/json" },
  });
  return token.data.access_token;
};
