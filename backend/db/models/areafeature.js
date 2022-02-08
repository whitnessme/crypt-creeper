'use strict';
module.exports = (sequelize, DataTypes) => {
  const AreaFeature = sequelize.define('AreaFeature', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  AreaFeature.associate = function(models) {
    AreaFeature.belongsToMany(models.Haunt, { through: 'hauntAreaFeatures', otherKey: 'hauntId', foreignKey: 'areaFeatureId' });
  };
  return AreaFeature;
};