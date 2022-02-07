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
    
    const colMapping = {
      through: 'hauntCryptids',
      otherKey: 'hauntId',
      foreignKey: 'cryptidId'
    }

    Cryptid.belongsToMany(models.Haunt, colMapping);
  };
  return Cryptid;
};