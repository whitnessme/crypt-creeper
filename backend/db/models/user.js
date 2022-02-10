"use strict";
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');
const { UserType } = require('../models')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(val) {
            if (Validator.isEmail(val)) {
              throw new Error("Username cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          len: [3, 256],
        },
      },
      userTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "UserTypes" }
      },
      firstName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      company: {
        type: DataTypes.STRING(75),
        allowNull: false
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "userTypeId", "UserType", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  
  User.associate = function (models) {
    User.belongsTo(models.UserType, { foreignKey: 'userTypeId' });
    User.hasMany(models.Haunt, { foreignKey: 'userId' });
    User.hasMany(models.Booking, { foreignKey: 'userId' });
    User.hasMany(models.Image, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  
  User.prototype.toSafeObject = function() {
    const { id, username, userTypeId, UserType, email, firstName, lastName, company } = this;
    return { id, username, userTypeId, UserType, email, firstName, lastName, company };
  };
  
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id, {include: [{model: UserType}]});
  };
  
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id, {include: [{model: UserType}]});
    }
  };
  
  User.signup = async function ({ username, email, lastName, firstName, userTypeId, company, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      userTypeId,
      firstName,
      lastName,
      company,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};
