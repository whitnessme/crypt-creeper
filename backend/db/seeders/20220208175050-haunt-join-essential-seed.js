'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkInsert('hauntEssentials', [
     {hauntId: 1, essentialId: 1},
     {hauntId: 1, essentialId: 8},
     {hauntId: 1, essentialId: 14},
     {hauntId: 1, essentialId: 15},
     {hauntId: 2, essentialId: 1},
     {hauntId: 2, essentialId: 10},
     {hauntId: 2, essentialId: 24},
     {hauntId: 2, essentialId: 22},
     {hauntId: 2, essentialId: 15},
     {hauntId: 3, essentialId: 2},
     {hauntId: 3, essentialId: 8},
     {hauntId: 3, essentialId: 21},
     {hauntId: 3, essentialId: 19},
     {hauntId: 3, essentialId: 18},
     {hauntId: 3, essentialId: 18},
     {hauntId: 4, essentialId: 3},
     {hauntId: 4, essentialId: 11},
     {hauntId: 4, essentialId: 22},
     {hauntId: 5, essentialId: 5},
     {hauntId: 5, essentialId: 8},
     {hauntId: 5, essentialId: 23},
     {hauntId: 5, essentialId: 20},
     {hauntId: 5, essentialId: 15},
     {hauntId: 5, essentialId: 7},
     {hauntId: 6, essentialId: 6},
     {hauntId: 6, essentialId: 12},
     {hauntId: 6, essentialId: 13},
     {hauntId: 6, essentialId: 15},
     {hauntId: 6, essentialId: 22},
     {hauntId: 6, essentialId: 24},
     {hauntId: 7, essentialId: 3},
     {hauntId: 7, essentialId: 10},
     {hauntId: 7, essentialId: 12},
     {hauntId: 7, essentialId: 25},
     {hauntId: 7, essentialId: 15},
     {hauntId: 7, essentialId: 15},
     {hauntId: 8, essentialId: 26},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('hauntEssentials', null, {});
  }
};
