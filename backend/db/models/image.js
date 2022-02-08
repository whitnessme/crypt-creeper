'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
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
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, {foreignKey: 'userId'})
    Image.belongsTo(models.Haunt, {foreignKey: 'hauntId'})
  };
  return Image;
};