'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkInsert('hauntAreaFeatures', [
    {hauntId: 1, areaFeatureId: 1},
    {hauntId: 1, areaFeatureId: 2},
    {hauntId: 1, areaFeatureId: 3},
    {hauntId: 1, areaFeatureId: 11},
    {hauntId: 2, areaFeatureId: 4},
    {hauntId: 2, areaFeatureId: 12},
    {hauntId: 3, areaFeatureId: 6},
    {hauntId: 3, areaFeatureId: 8},
    {hauntId: 3, areaFeatureId: 13},
    {hauntId: 4, areaFeatureId: 6},
    {hauntId: 4, areaFeatureId: 9},
    {hauntId: 4, areaFeatureId: 14},
    {hauntId: 5, areaFeatureId: 7},
    {hauntId: 5, areaFeatureId: 10},
    {hauntId: 5, areaFeatureId: 3},
    {hauntId: 5, areaFeatureId: 15},
    {hauntId: 6, areaFeatureId: 5},
    {hauntId: 6, areaFeatureId: 4},
    {hauntId: 6, areaFeatureId: 17},
    {hauntId: 7, areaFeatureId: 6},
    {hauntId: 7, areaFeatureId: 9},
    {hauntId: 7, areaFeatureId: 16},
    {hauntId: 8, areaFeatureId: 5},
    {hauntId: 8, areaFeatureId: 17},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('hauntAreaFeatures', null, {});
  }
};
