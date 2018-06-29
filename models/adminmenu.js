'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminMenu = sequelize.define('AdminMenu', {
    parent_id: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    uri: DataTypes.STRING
  }, {});
  AdminMenu.associate = function(models) {
    // associations can be defined here
  };
  return AdminMenu;
};