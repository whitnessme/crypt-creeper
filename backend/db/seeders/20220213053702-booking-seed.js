'use strict';

let options = {};
options.tableName = 'Bookings'; 
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(options, [
     {userId: 1, hauntId: 5, startDate: '2022-02-17', endDate: '2022-01-20', numOfGuests: 3},
     {userId: 1, hauntId: 2, startDate: '2022-02-22', endDate: '2022-01-24', numOfGuests: 4}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete(options, null, {});
  }
};
