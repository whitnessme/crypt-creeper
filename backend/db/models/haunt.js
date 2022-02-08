'use strict';
module.exports = (sequelize, DataTypes) => {
  const Haunt = sequelize.define('Haunt', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    closeLandmark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Haunt.associate = function(models) {
    Haunt.belongsTo(models.User, { foreignKey: 'userId' });
    Haunt.hasMany(models.Booking, { foreignKey: "hauntId" })
    Haunt.hasMany(models.Image, { foreignKey: "hauntId" })
    Haunt.hasMany(models.Review, { foreignKey: "hauntId" })

    const columnMapping = {
      through: 'hauntCryptids',
      otherKey: 'cryptidId',
      foreignKey: 'hauntId' 
    }

    Haunt.belongsToMany(models.Cryptid, columnMapping);
    Haunt.belongsToMany(models.Essential, { through: 'hauntEssentials', otherKey: 'essentialId', foreignKey: 'hauntId'  });
    Haunt.belongsToMany(models.AreaFeature, { through: 'hauntAreaFeatures', otherKey: 'areaFeatureId', foreignKey: 'hauntId'  });
    Haunt.belongsToMany(models.Amenity, { through: 'hauntAmenities', otherKey: 'amenityId', foreignKey: 'hauntId'  });
  };
  return Haunt;
};