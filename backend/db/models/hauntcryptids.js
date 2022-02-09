'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntCryptids = sequelize.define('hauntCryptids', {
    hauntId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Haunts',
        key: 'id'
      }
    },
    cryptidId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cryptids',
        key: 'id'
      }
    }
  }, {});
  hauntCryptids.associate = function(models) {
    // associations can be defined here
  };
  return hauntCryptids;
};