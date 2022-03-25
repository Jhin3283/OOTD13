const models = require("../models");
const deletePost = require("./deletePost");

module.exports = {
  deleteUserPost: async (email, loginmethod) => {
    const userInfo = await models.user.findOne({
      where: { email: email, login_method: loginmethod },
    });
    const articles = await models.article.findAll({
      where: { user_id: userInfo.id },
    });
    await articles.forEach(async (article) => {
      await deletePost(article.id);
    });
    await models.user.destroy({ where: { id: userInfo.id } });
  },
  deleteUser: async (email, loginmethod) => {
    const userInfo = await models.user.findOne({
      where: { email: email, login_method: loginmethod },
    });
    await models.user.destroy({ where: { id: userInfo.id } });
  },
};
