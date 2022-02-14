'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Bookings', [
     {userId: 1, hauntId: 5, startDate: '2022-02-17', endDate: '2022-01-20', numOfGuests: 3},
     {userId: 1, hauntId: 2, startDate: '2022-02-22', endDate: '2022-01-24', numOfGuests: 4}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
