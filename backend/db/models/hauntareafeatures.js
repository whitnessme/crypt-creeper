'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntAreaFeatures = sequelize.define('hauntAreaFeatures', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Haunts',
        key: 'id'
      }
    },
    areaFeatureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AreaFeatures',
        key: 'id'
      }
    }
  }, {});
  hauntAreaFeatures.associate = function(models) {
    // associations can be defined here
  };
  return hauntAreaFeatures;
};