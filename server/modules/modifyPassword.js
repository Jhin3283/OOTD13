const models = require("../models");

module.exports = {
  modifyPassword: async (email, newPassword) => {
    models.user.update({ password: newPassword }, { where: { email: email,login_method:0 } });
  },
};
