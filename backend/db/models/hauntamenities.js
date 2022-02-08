'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntAmenities = sequelize.define('hauntAmenities', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Haunts',
        key: 'id'
      }
    },
    amenityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Amenities',
        key: 'id'
      }
    }
  }, {});
  hauntAmenities.associate = function(models) {
    // associations can be defined here
  };
  return hauntAmenities;
};