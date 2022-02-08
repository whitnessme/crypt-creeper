'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Haunt, {foreignKey: 'hauntId'})
  };
  return Review;
};