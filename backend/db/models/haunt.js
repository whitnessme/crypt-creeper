'use strict';
module.exports = (sequelize, DataTypes) => {
  const Haunt = sequelize.define('Haunt', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    country: DataTypes.STRING,
    closeLandmark: DataTypes.STRING,
    price: DataTypes.INTEGER,
    summary: DataTypes.TEXT
  }, {});
  Haunt.associate = function(models) {
    // associations can be defined here
  };
  return Haunt;
};