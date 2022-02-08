'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Amenities', [
    {name: 'No running water', icon: ''},
    {name: 'No potable water', icon: ''},
    {name: 'River nearby', icon: ''},
    {name: 'No cooking utensils provided', icon: ''},

    {name: 'Firewood for sale', icon: ''},
    {name: 'Map of area', icon: ''},
    {name: 'Woodknocking', icon: ''},
    {name: 'Howls', icon: ''},
    {name: 'Hiking trails', icon: ''},
    {name: 'Stone throwing', icon: ''},
    {name: 'Not drinkable running water', icon: ''},
    {name: 'Shower', icon: ''},
    {name: 'Shower and bathtub', icon: ''},
    {name: 'Tour list', icon: ''},
    {name: 'Drinkable tap water', icon: ''},
    {name: 'Full kitchen', icon: ''},
    {name: 'Restaurants nearby', icon: ''},
    {name: 'Kayak, boat, and jetski rentals nearby', icon: ''},
    {name: 'Bring your own food', icon: ''},
    {name: 'Active ghosts', icon: ''},
    {name: 'Lifejackets available', icon: ''},
    {name: 'Possession unlikely', icon: ''},
    {name: 'Swimming and fishing areas', icon: ''},
    {name: 'Small kitchen', icon: ''},
    {name: 'Potable water', icon: ''},

  
   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('Amenities', null, {});
  }
};