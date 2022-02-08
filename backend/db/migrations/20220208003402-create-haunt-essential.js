'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hauntEssentials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hauntId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Haunts',
          key: 'id'
        }
      },
      essentialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Essentials',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hauntEssentials');
  }
};