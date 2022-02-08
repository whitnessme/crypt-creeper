'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cryptid = sequelize.define('Cryptid', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Cryptid.associate = function(models) {

    Cryptid.belongsToMany(models.Haunt, { through: 'hauntCryptids', otherKey: 'hauntId', foreignKey: 'cryptidId'});
  };
  return Cryptid;
};