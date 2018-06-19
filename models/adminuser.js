'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminUser = sequelize.define('AdminUser', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
        validate:{
            isEmail: true
        }
    },
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    remember_token: DataTypes.STRING
  }, {});
  AdminUser.associate = function(models) {
    // associations can be defined here
  };
  return AdminUser;
};