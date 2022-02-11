'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Essentials', [
    {name: 'No bathrooms', icon: '<i className="fa-solid fa-toilet-paper-slash"></i>'},
    {name: '1 bathroom', icon: '<i className="fa-solid fa-toilet-paper"></i>'},
    {name: '2 bathrooms', icon: '<i className="fa-solid fa-toilet-paper"></i>'},
    {name: 'No outhouse', icon: '<i className="fa-solid fa-toilet-paper-slash"></i>'},
    {name: 'Many bathrooms', icon: '<i className="fa-solid fa-toilet-paper"></i>'},
    {name: 'Rest areas near ranger stations', icon: '<i className="fa-solid fa-toilet-paper"></i>'},
    {name: 'Doors are locked at sundown, no leaving until the morning', icon: '<i className="fa-solid fa-lock"></i>'},
    {name: 'No pets or animals', icon: '<i className="fa-solid fa-slash"></i>'},
    {name: 'No cats', icon: '<i className="fa-solid fa-slash"></i>'},
    {name: 'No small animals', icon: '<i className="fa-solid fa-slash"></i>'},
    {name: 'Pets welcome', icon: '<i className="fa-solid fa-cat"></i>'},
    {name: 'Large dogs allowed', icon: '<i className="fa-solid fa-dog"></i>'},
    {name: 'Small dogs not recommended, no other animals', icon: '<i className="fa-solid fa-dog"></i>'},
    {name: 'Boat available', icon: '<i className="fa-solid fa-ship"></i>'},
    {name: 'First aid kit', icon: '<i className="fa-solid fa-kit-medical"></i>'},
    {name: 'Firepit', icon: '<i className="fa-solid fa-fire"></i>'},
    {name: 'Picnic table', icon: '<i className="fa-solid fa-tree"></i>'},
    {name: 'Fire insurance', icon: '<i className="fa-solid fa-fire-flame-curved"></i>'},
    {name: 'Candles', icon: '<i className="fa-solid fa-cake-candles"></i>'},
    {name: 'No candles allowed', icon: '<i className="fa-solid fa-slash"></i>'},
    {name: 'Seance Kits for sale', icon: '<i className="fa-solid fa-hand-sparkles"></i>'},
    {name: 'GPS Location Tracker', icon: '<i className="fa-solid fa-location-arrow"></i>'},
    {name: 'Children Toys for Ghosts available', icon: '<i className="fa-solid fa-baseball"></i>'},
    {name: 'Recording devices for sale', icon: '<i className="fa-solid fa-video"></i>'},
    {name: 'Home defense kit available', icon: '<i className="fa-solid fa-shield-blank"></i>'},
    {name: 'Rest area buildings on site', icon: '<i className="fa-solid fa-toilet-paper"></i>'},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkDelete('Essentials', null, {});
  }
};
