'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      content.hasOne(models.article,{
        foreignKey:'content_id',
        sourceKey:'id',
        onDelete: 'CASCADE'
      })
    }
  }
  content.init({
    shirts: DataTypes.STRING,
    pants: DataTypes.STRING,
    acc: DataTypes.STRING,
    outer: DataTypes.STRING,
    shoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'content',
  });
  return content;
};