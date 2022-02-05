'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('UserTypes', [
     {type: "regular"},
     {type: "host"}
   ], {});

  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('UserTypes', null, {});

  }
};
