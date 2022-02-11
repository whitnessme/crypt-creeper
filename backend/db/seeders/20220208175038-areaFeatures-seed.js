'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('AreaFeatures', [
    {name: 'Swamp house', icon: '<i className="fa-solid fa-house"></i>'},
    {name: '1 queen sized bed', icon: '<i className="fa-solid fa-bed"></i>'},
    {name: 'Cots available', icon: '<i className="fa-solid fa-bed"></i>'},
    {name: 'Bring your own tent, primitive campsites', icon: '<i className="fa-solid fa-campground"></i>'},
    {name: 'Campground', icon: '<i className="fa-solid fa-campground"></i>'},
    {name: 'House', icon: '<i className="fa-solid fa-house"></i>'},
    {name: 'Abandoned Hospital', icon: '<i className="fa-solid fa-hospital"></i>'},
    {name: '3 beds', icon: '<i className="fa-solid fa-bed"></i>'},
    {name: '4 beds', icon: '<i className="fa-solid fa-bed"></i>'},
    {name: 'Plenty of floor space', icon: '<i className="fa-solid fa-arrows-left-right"></i>'},
    {name: '2 to 5 adults, children not recommended', icon: '<i className="fa-solid fa-users"></i>'},
    {name: 'Up to 15 guests', icon: '<i className="fa-solid fa-users"></i>'},
    {name: 'Up to 4 adults, NO CHILDREN', icon: '<i className="fa-solid fa-users"></i>'},
    {name: 'Up to 7 guests', icon: '<i className="fa-solid fa-users"></i>'},
    {name: 'Up to 30 guests, no children under the age of 7', icon: '<i className="fa-solid fa-users"></i>'},
    {name: 'Up to 8 guests', icon: '<i className="fa-solid fa-users"></i>'},
    {name: 'Up to 8 guests per campsite', icon: '<i className="fa-solid fa-users"></i>'},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('AreaFeatures', null, {});
  }
};
