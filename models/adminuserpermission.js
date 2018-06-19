'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminUserPermission = sequelize.define('AdminUserPermission', {
    user_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER
  }, {});
  AdminUserPermission.associate = function(models) {
    // associations can be defined here
  };
  return AdminUserPermission;
};