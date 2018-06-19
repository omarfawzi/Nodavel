'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminPermission = sequelize.define('AdminPermission', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    http_method: DataTypes.JSON,
    http_path: DataTypes.STRING
  }, {});
  AdminPermission.associate = function(models) {
    // associations can be defined here
  };
  return AdminPermission;
};