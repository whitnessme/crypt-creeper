'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntAmenities = sequelize.define('hauntAmenities', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amenityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  hauntAmenities.associate = function(models) {
    // associations can be defined here
  };
  return hauntAmenities;
};