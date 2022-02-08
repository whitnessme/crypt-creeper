'use strict';
module.exports = (sequelize, DataTypes) => {
  const hauntCryptid = sequelize.define('hauntCryptid', {
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
  hauntCryptid.associate = function(models) {
    // associations can be defined here
  };
  return hauntCryptid;
};