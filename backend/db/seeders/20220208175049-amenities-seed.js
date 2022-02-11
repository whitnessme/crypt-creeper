'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Amenities', [
    {name: 'No running water', icon: '<i className="fa-solid fa-droplet-slash"></i>'},
    {name: 'No potable water', icon: '<i className="fa-solid fa-droplet-slash"></i>'},
    {name: 'River nearby', icon: '<i className="fa-solid fa-water"></i>'},
    {name: 'No cooking utensils provided', icon: '<i className="fa-solid fa-slash"></i>'},

    {name: 'Firewood for sale', icon: '<i className="fa-solid fa-fire"></i>'},
    {name: 'Map of area', icon: '<i className="fa-solid fa-map"></i>'},
    {name: 'Woodknocking', icon: '<i className="fa-solid fa-ear-listen"></i>'},
    {name: 'Howls', icon: '<i className="fa-solid fa-ear-listen"></i>'},
    {name: 'Hiking trails', icon: '<i className="fa-solid fa-person-hiking"></i>'},
    {name: 'Stone throwing', icon: '<i className="fa-solid fa-ear-listen"></i>'},
    {name: 'Not drinkable running water', icon: '<i className="fa-solid fa-faucet"></i>'},
    {name: 'Shower', icon: '<i className="fa-solid fa-shower"></i>'},
    {name: 'Shower and bathtub', icon: '<i className="fa-solid fa-bath"></i>'},
    {name: 'Tour list', icon: '<i className="fa-solid fa-rectangle-list"></i>'},
    {name: 'Drinkable tap water', icon: '<i className="fa-solid fa-faucet"></i>'},
    {name: 'Full kitchen', icon: '<i className="fa-solid fa-utensils"></i>'},
    {name: 'Restaurants nearby', icon: '<i className="fa-solid fa-store"></i>'},
    {name: 'Kayak, boat, and jetski rentals nearby', icon: '<i className="fa-solid fa-store"></i>'},
    {name: 'Bring your own food', icon: '<i className="fa-solid fa-bone"></i>'},
    {name: 'Active ghosts', icon: '<i className="fa-solid fa-ghost"></i>'},
    {name: 'Lifejackets available', icon: '<i className="fa-solid fa-person-swimming"></i>'},
    {name: 'Possession unlikely', icon: '<i className="fa-solid fa-ghost"></i>'},
    {name: 'Swimming and fishing areas', icon: '<i className="fa-solid fa-fish"></i>'},
    {name: 'Small kitchen', icon: '<i className="fa-solid fa-utensils"></i>'},
    {name: 'Potable water', icon: '<i className="fa-solid fa-faucet"></i>'},

  
   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('Amenities', null, {});
  }
};