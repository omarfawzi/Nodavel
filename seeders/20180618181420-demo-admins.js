var bcrypt = require('bcrypt-nodejs');

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('admin_users', [{
            username: 'admin',
            password: bcrypt.hashSync('admin'),
            email: 'demo@demo.com',
            name : 'administrator'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('admin_users', null, {});
    }
};
