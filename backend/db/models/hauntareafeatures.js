'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntAreaFeatures = sequelize.define('hauntAreaFeatures', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    areaFeatureId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  hauntAreaFeatures.associate = function(models) {
    // associations can be defined here
  };
  return hauntAreaFeatures;
};