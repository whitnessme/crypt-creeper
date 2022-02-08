'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Amenity.associate = function(models) {
    Amenity.belongsToMany(models.Haunt, { through: 'hauntAmenity' });
  };
  return Amenity;
};