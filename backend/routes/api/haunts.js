const express = require("express");
const asyncHandler = require("express-async-handler");
const validateHaunt = require('../validations/haunt')
const { Haunt, Image } = require('../../db/models')

const router = express.Router();

// Get all Haunts & Images with that id
router.get('/', asyncHandler(async function (req, res) {
    return Haunt.findAll({ include: Image })
}));

// Get specific Haunt
router.get('/:hauntId', asyncHandler(async function (req, res) {
    return Haunt.findByPk(req.params.hauntId)
}));

// Create New Haunt
router.post('/', validateHaunt, asyncHandler(async function(req, res) {
    const { userId, name, address, city, state, zipcode, country, closeLandmark, price, summary } = req.body;
    const haunt = await Haunt.create({
        userId,
        name,
        address,
        city,
        state,
        zipcode,
        country,
        closeLandmark,
        price,
        summary
    });
    return res.json(haunt)
}))

// Update Specific Haunt
router.put('/:hauntId', validateHaunt, asyncHandler(async function(req, res) {
    const { userId, name, address, city, state, zipcode, country, closeLandmark, price, summary } = req.body;

    const updated = await Haunt.update({
        userId,
        name,
        address,
        city,
        state,
        zipcode,
        country,
        closeLandmark,
        price,
        summary
    }, {where: req.params.hauntId});

    return res.json(updated)
}))

// Delete a specific Haunt

router.delete('/:hauntId', asyncHandler(async function(req, res) {
    const haunt = await Haunt.findByPk(req.params.hauntId);
    haunt.destroy();

    return res.json('Successfully Deleted ', req.params.hauntId)

}))