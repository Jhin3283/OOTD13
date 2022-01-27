const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  createToken: async (userInfo) => {
    const { email, username, password, login_method, createdAt } = userInfo;
    const data = {
      email,
      username,
      password,
      login_method,
      createdAt,
    };
    const accessToken = jwt.sign(data, process.env.ACCESS_SECRET, {
      expiresIn: "1d",
    });
    return accessToken;
  },
};
