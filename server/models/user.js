'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.article,{
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
        foreignKey:'user_id',
        sourceKey:'id'
      })
    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    login_method: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};