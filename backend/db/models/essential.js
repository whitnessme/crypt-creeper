'use strict';
module.exports = (sequelize, DataTypes) => {
  const Essential = sequelize.define('Essential', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Essential.associate = function(models) {
    Essential.belongsToMany(models.Haunt, { through: 'hauntEssentials', otherKey: 'hauntId', foreignKey: 'essentialId' });
  };
  return Essential;
};