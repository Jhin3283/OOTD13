'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article_tag.belongsTo(models.article,{
        foreignKey:'article_id',
        sourceKey:'id',
        onDelete: 'CASCADE'
      })
      article_tag.belongsTo(models.tag,{
        foreignKey:'tag_id',
        sourceKey:'id',
        onDelete: 'CASCADE'
      })
    }
  }
  article_tag.init({
  }, {
    sequelize,
    modelName: 'article_tag',
  });
  return article_tag;
};