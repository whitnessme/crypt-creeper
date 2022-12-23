'use strict';

let options = {};
options.tableName = 'UserTypes'; 
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert(options, [
     {type: "regular"},
     {type: "host"}
   ], {});

  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete(options, null, {});

  }
};
