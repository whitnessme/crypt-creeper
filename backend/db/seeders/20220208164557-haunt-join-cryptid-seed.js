'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('hauntCryptids', [
     {hauntId: 1, cryptidId: 1},
     {hauntId: 1, cryptidId: 2}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('hauntCryptids', null, {});
  }
};
