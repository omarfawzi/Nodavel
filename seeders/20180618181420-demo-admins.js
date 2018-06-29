// var bcrypt = require('bcrypt-nodejs');

const fs = require("fs");
const path = require("path");

module.exports = {
    up: (queryInterface, Sequelize) => {
        var query = fs.readFileSync(path.join(__dirname, '/../database/admin.sql'));
        // console.log();
        return queryInterface.sequelize.query(query.toString());
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(admin_users, null, {});
    }
};
