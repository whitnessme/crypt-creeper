'use strict';
const bcrypt = require('bcryptjs');

let options = {};
options.tableName = 'Users'; 
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(options, [
      {
        email: 'demo@user.io',
        username: 'DougDemoDome',
        userTypeId: 1,
        firstName: 'Doug Demo',
        lastName: 'Dome',
        company: "n/a",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FauxUser01',
        userTypeId: 1,
        firstName: 'Faux',
        lastName: 'Regular',
        company: "n/a",
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FauxUser02',
        userTypeId: 2,
        firstName: 'Faux',
        lastName: 'Host',
        company: "Haunted Hotels Inc.",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user3@user.io',
        username: 'FauxUser03',
        userTypeId: 2,
        firstName: 'Faux',
        lastName: 'Hostess',
        company: "Spooky Campsites",
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['DougDemoDome', 'FauxUser01', 'FauxUser02'] }
    }, {});
  }
};