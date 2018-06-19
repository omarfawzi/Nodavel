'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminRole = sequelize.define('AdminRole', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  AdminRole.associate = function(models) {
    // associations can be defined here
  };
  return AdminRole;
};