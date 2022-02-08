'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: { model: "Users" }
    },
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Haunts" }
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, {foreignKey: 'userId'})
    Booking.belongsTo(models.Haunt, {foreignKey: 'hauntId'})
  };
  return Booking;
};