'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminRoleMenu = sequelize.define('AdminRoleMenu', {
    role_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER
  }, {});
  AdminRoleMenu.associate = function(models) {
    // associations can be defined here
  };
  return AdminRoleMenu;
};