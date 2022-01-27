const models = require("../models");
const { verify } = require("jsonwebtoken");
const requestUserInfoGit = require("./requestUserInfoGit");
const req = require("express/lib/request");

module.exports = {
  validateToken: async (loginMethod, token) => {
    if (loginMethod==='0') {
      const userInfo=verify(token, process.env.ACCESS_SECRET);
      return userInfo;
    } else if (loginMethod==='1') {
      const userInfo = requestUserInfoGit(token);
      return userInfo;
    }
  },
};