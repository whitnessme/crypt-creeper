'use strict';
module.exports = (sequelize, DataTypes) => {
  const Haunt = sequelize.define('Haunt', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    closeLandmark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Haunt.associate = function(models) {
    Haunt.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Haunt;
};