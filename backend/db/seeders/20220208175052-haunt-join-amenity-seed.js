'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkInsert('hauntAmenities', [
     {hauntId: 1, amenityId: 1},
     {hauntId: 1, amenityId: 4},
     {hauntId: 1, amenityId: 19},
     {hauntId: 1, amenityId: 21},
     {hauntId: 2, amenityId: 2},
     {hauntId: 2, amenityId: 19},
     {hauntId: 2, amenityId: 7},
     {hauntId: 2, amenityId: 8},
     {hauntId: 2, amenityId: 9},
     {hauntId: 2, amenityId: 10},
     {hauntId: 2, amenityId: 6},
     {hauntId: 3, amenityId: 11},
     {hauntId: 3, amenityId: 17},
     {hauntId: 3, amenityId: 16},
     {hauntId: 3, amenityId: 6},
     {hauntId: 3, amenityId: 13},
     {hauntId: 3, amenityId: 14},
     {hauntId: 4, amenityId: 15},
     {hauntId: 4, amenityId: 16},
     {hauntId: 4, amenityId: 17},
     {hauntId: 4, amenityId: 18},
     {hauntId: 5, amenityId: 11},
     {hauntId: 5, amenityId: 12},
     {hauntId: 5, amenityId: 20},
     {hauntId: 5, amenityId: 22},
     {hauntId: 6, amenityId: 3},
     {hauntId: 6, amenityId: 19},
     {hauntId: 6, amenityId: 23},
     {hauntId: 6, amenityId: 9},
     {hauntId: 6, amenityId: 10},
     {hauntId: 6, amenityId: 7},
     {hauntId: 6, amenityId: 8},
     {hauntId: 7, amenityId: 15},
     {hauntId: 7, amenityId: 16},
     {hauntId: 7, amenityId: 6},
     {hauntId: 7, amenityId: 17},
     {hauntId: 8, amenityId: 25},
     {hauntId: 8, amenityId: 12},
     {hauntId: 8, amenityId: 5},
     {hauntId: 8, amenityId: 17},
     {hauntId: 8, amenityId: 18},
     {hauntId: 8, amenityId: 23},
     {hauntId: 8, amenityId: 21},
     {hauntId: 8, amenityId: 21},
     {hauntId: 8, amenityId: 6},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('hauntAmenities', null, {});
  }
};
