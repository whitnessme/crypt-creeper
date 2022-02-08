'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntEssentials = sequelize.define('hauntEssentials', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Haunts',
        key: 'id'
      }
    },
    essentialId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Essentials',
        key: 'id'
      }
    }
  }, {});
  hauntEssentials.associate = function(models) {
    // associations can be defined here
  };
  return hauntEssentials;
};