'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminRolePermission = sequelize.define('AdminRolePermission', {
    role_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER
  }, {});
  AdminRolePermission.associate = function(models) {
    // associations can be defined here
  };
  return AdminRolePermission;
};