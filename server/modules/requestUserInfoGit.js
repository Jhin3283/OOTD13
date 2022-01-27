const axios = require("axios");
require("dotenv").config();

module.exports = async (accessToken) => {
  const url = "https://api.github.com/user";
  const userInfo = await axios.get(url, {
    headers: { authorization: `token ${accessToken}` },
  });
  return {
    email: userInfo.data.login + "@github.com",
    username: userInfo.data.login,
    login_method: 1,
  };
};
