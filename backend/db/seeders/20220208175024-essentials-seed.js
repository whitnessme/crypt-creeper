'use strict';

let options = {};
options.tableName = 'Essentials'; 
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert(options, [
    {name: 'No bathrooms', icon: '<i class="fa-solid fa-toilet-paper-slash"></i>'},
    {name: '1 bathroom', icon: '<i class="fa-solid fa-toilet-paper"></i>'},
    {name: '2 bathrooms', icon: '<i class="fa-solid fa-toilet-paper"></i>'},
    {name: 'No outhouse', icon: '<i class="fa-solid fa-toilet-paper-slash"></i>'},
    {name: 'Many bathrooms', icon: '<i class="fa-solid fa-toilet-paper"></i>'},
    {name: 'Rest areas near ranger stations', icon: '<i class="fa-solid fa-toilet-paper"></i>'},
    {name: 'Doors are locked at sundown, no leaving until the morning', icon: '<i class="fa-solid fa-lock"></i>'},
    {name: 'No pets or animals', icon: '<i class="fa-solid fa-slash"></i>'},
    {name: 'No cats', icon: '<i class="fa-solid fa-slash"></i>'},
    {name: 'No small animals', icon: '<i class="fa-solid fa-slash"></i>'},
    {name: 'Pets welcome', icon: '<i class="fa-solid fa-cat"></i>'},
    {name: 'Large dogs allowed', icon: '<i class="fa-solid fa-dog"></i>'},
    {name: 'Small dogs not recommended, no other animals', icon: '<i class="fa-solid fa-dog"></i>'},
    {name: 'Boat available', icon: '<i class="fa-solid fa-ship"></i>'},
    {name: 'First aid kit', icon: '<i class="fa-solid fa-kit-medical"></i>'},
    {name: 'Firepit', icon: '<i class="fa-solid fa-fire"></i>'},
    {name: 'Picnic table', icon: '<i class="fa-solid fa-tree"></i>'},
    {name: 'Fire insurance', icon: '<i class="fa-solid fa-fire-flame-curved"></i>'},
    {name: 'Candles', icon: '<i class="fa-solid fa-cake-candles"></i>'},
    {name: 'No candles allowed', icon: '<i class="fa-solid fa-slash"></i>'},
    {name: 'Seance Kits for sale', icon: '<i class="fa-solid fa-hand-sparkles"></i>'},
    {name: 'GPS Location Tracker', icon: '<i class="fa-solid fa-location-arrow"></i>'},
    {name: 'Children Toys for Ghosts available', icon: '<i class="fa-solid fa-baseball"></i>'},
    {name: 'Recording devices for sale', icon: '<i class="fa-solid fa-video"></i>'},
    {name: 'Home defense kit available', icon: '<i class="fa-solid fa-shield-blank"></i>'},
    {name: 'Rest area buildings on site', icon: '<i class="fa-solid fa-toilet-paper"></i>'},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete(options, null, {});
  }
};
