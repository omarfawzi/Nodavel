'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminRoleUser = sequelize.define('AdminRoleUser', {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {});
  AdminRoleUser.associate = function(models) {
    // associations can be defined here
  };
  return AdminRoleUser;
};