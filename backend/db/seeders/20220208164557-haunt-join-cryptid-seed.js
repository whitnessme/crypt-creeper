'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('hauntCryptids', [
     {hauntId: 1, cryptidId: 1},
     {hauntId: 1, cryptidId: 2},
     {hauntId: 2, cryptidId: 3},
     {hauntId: 2, cryptidId: 4},
     {hauntId: 3, cryptidId: 5},
     {hauntId: 4, cryptidId: 6},
     {hauntId: 5, cryptidId: 5},
     {hauntId: 6, cryptidId: 7},
     {hauntId: 7, cryptidId: 8},
     {hauntId: 8, cryptidId: 9},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('hauntCryptids', null, {});
  }
};
