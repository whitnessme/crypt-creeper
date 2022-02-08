'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntEssentials = sequelize.define('hauntEssentials', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    essentialId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  hauntEssentials.associate = function(models) {
    // associations can be defined here
  };
  return hauntEssentials;
};