'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    type: DataTypes.STRING,
    allowNull: false
  }, {});
  UserType.associate = function(models) {
    UserType.hasMany(models.User, { foreignKey: 'userTypeId' });
  };
  return UserType;
};