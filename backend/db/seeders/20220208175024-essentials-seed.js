'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Essentials', [
    {name: 'No bathrooms', icon: ''},
    {name: '1 bathroom', icon: ''},
    {name: '2 bathrooms', icon: ''},
    {name: 'No outhouse', icon: ''},
    {name: 'Many bathrooms', icon: ''},
    {name: 'Rest areas near ranger stations', icon: ''},
    {name: 'Doors are locked at sundown, no leaving until the morning', icon: ''},
    {name: 'No pets or animals', icon: ''},
    {name: 'No cats', icon: ''},
    {name: 'No small animals', icon: ''},
    {name: 'Pets welcome', icon: ''},
    {name: 'Large dogs allowed', icon: ''},
    {name: 'Small dogs not recommended, no other animals', icon: ''},
    {name: 'Boat available', icon: ''},
    {name: 'First aid kit', icon: ''},
    {name: 'Firepit', icon: ''},
    {name: 'Picnic table', icon: ''},
    {name: 'Fire insurance', icon: ''},
    {name: 'Candles', icon: ''},
    {name: 'No candles allowed', icon: ''},
    {name: 'Seance Kits for sale', icon: ''},
    {name: 'GPS Location Tracker', icon: ''},
    {name: 'Children Toys for Ghosts available', icon: ''},
    {name: 'Recording devices for sale', icon: ''},
    {name: 'Home defense kit available', icon: ''},
    {name: 'Rest area buildings on site', icon: ''},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('Essentials', null, {});
  }
};
