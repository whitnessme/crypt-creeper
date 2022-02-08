'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntCryptids = sequelize.define('hauntCryptids', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cryptidId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  hauntCryptids.associate = function(models) {
    // associations can be defined here
  };
  return hauntCryptids;
};