'use strict';

let options = {};
options.tableName = 'AreaFeatures'; 
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert(options, [
    {name: 'Swamp house', icon: '<i class="fa-solid fa-house"></i>'},
    {name: '1 queen sized bed', icon: '<i class="fa-solid fa-bed"></i>'},
    {name: 'Cots available', icon: '<i class="fa-solid fa-bed"></i>'},
    {name: 'Bring your own tent, primitive campsites', icon: '<i class="fa-solid fa-campground"></i>'},
    {name: 'Campground', icon: '<i class="fa-solid fa-campground"></i>'},
    {name: 'House', icon: '<i class="fa-solid fa-house"></i>'},
    {name: 'Abandoned Hospital', icon: '<i class="fa-solid fa-hospital"></i>'},
    {name: '3 beds', icon: '<i class="fa-solid fa-bed"></i>'},
    {name: '4 beds', icon: '<i class="fa-solid fa-bed"></i>'},
    {name: 'Plenty of floor space', icon: '<i class="fa-solid fa-arrows-left-right"></i>'},
    {name: '2 to 5 adults, children not recommended', icon: '<i class="fa-solid fa-users"></i>'},
    {name: 'Up to 15 guests', icon: '<i class="fa-solid fa-users"></i>'},
    {name: 'Up to 4 adults, NO CHILDREN', icon: '<i class="fa-solid fa-users"></i>'},
    {name: 'Up to 7 guests', icon: '<i class="fa-solid fa-users"></i>'},
    {name: 'Up to 30 guests, no children under the age of 7', icon: '<i class="fa-solid fa-users"></i>'},
    {name: 'Up to 8 guests', icon: '<i class="fa-solid fa-users"></i>'},
    {name: 'Up to 8 guests per campsite', icon: '<i class="fa-solid fa-users"></i>'},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete(options, null, {});
  }
};
