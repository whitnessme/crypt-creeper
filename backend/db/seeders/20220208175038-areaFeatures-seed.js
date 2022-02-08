'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('AreaFeatures', [
    {name: 'Swamp house', icon: ''},
    {name: '1 queen sized bed', icon: ''},
    {name: 'Cots available', icon: ''},
    {name: 'Bring your own tent, primitive campsites', icon: ''},
    {name: 'Campground', icon: ''},
    {name: 'House', icon: ''},
    {name: 'Abandoned Hospital', icon: ''},
    {name: '3 beds', icon: ''},
    {name: '4 beds', icon: ''},
    {name: 'Plenty of floor space', icon: ''},
    {name: '2 to 5 adults, children not recommended', icon: ''},
    {name: 'Up to 15 guests', icon: ''},
    {name: 'Up to 4 adults, NO CHILDREN', icon: ''},
    {name: 'Up to 7 guests', icon: ''},
    {name: 'Up to 30 guests, no children under the age of 7', icon: ''},
    {name: 'Up to 8 guests', icon: ''},
    {name: 'Up to 8 guests per campsite', icon: ''},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('AreaFeatures', null, {});
  }
};
