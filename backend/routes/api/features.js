const express = require("express");
const asyncHandler = require("express-async-handler");
const validateHaunt = require('../validations/haunt');

const { Haunt } = require('../../db/models')

const router = express.Router();
