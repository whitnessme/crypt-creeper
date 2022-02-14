const express = require("express");
const asyncHandler = require("express-async-handler");
const validateHaunt = require('../validations/haunt')
const { Haunt, Image, Review, Cryptid, AreaFeature, Essential, Amenity, Booking, User, hauntAmenities, hauntAreaFeatures, hauntCryptids, hauntEssentials } = require('../../db/models')

const router = express.Router();

// Get all Haunts & Images with that id
router.get('/', asyncHandler(async function (req, res) {
    const haunts = await Haunt.findAll({include: [
        {model: Image}
    ]})
    res.json(haunts)
}));

// Get all Haunts from a certain host
router.get('/host/:userId', asyncHandler(async function (req, res) {
    const haunts = await Haunt.findAll({
        where: {
            userId: req.params.userId
        },
        include: [
        {model: Image},
        {model: Cryptid},
        {model: AreaFeature},
        {model: Essential},
        {model: Amenity}
    ]})
    res.json(haunts)
}));

// Get specific Haunt
router.get('/:hauntId', asyncHandler(async function (req, res) {
    const haunts = await Haunt.findByPk(req.params.hauntId, {include: [
        {model: Image},
        {model: Cryptid},
        {model: AreaFeature},
        {model: Essential},
        {model: Amenity},
        {model: User}
    ]});
        return res.json(haunts)

}));

// Create New Haunt

router.post("/", validateHaunt, asyncHandler(async function(req, res) {
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
    console.log(res.json(haunt))
    res.json(haunt)
}))

// Update Specific Haunt
router.put('/:hauntId', validateHaunt,
asyncHandler(async (req, res) => {
    const { userId, name, address, city, state, zipcode, country, closeLandmark, price, summary } = req.body;
console.log(req.json)
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
    }, {where: {
        id: req.params.hauntId
    }});
    const result = await Haunt.findByPk(req.params.hauntId, {include: [
        {model: Image},
        {model: Cryptid},
        {model: AreaFeature},
        {model: Essential},
        {model: Amenity},
        {model: User}
    ]})
    console.log(result)
    return res.json(result)
}))

// Delete a specific Haunt

router.delete('/:hauntId', asyncHandler(async function(req, res) {
    const haunt = await Haunt.findByPk(req.params.hauntId);
    const areaJoin = await hauntAreaFeatures.findAll({where: {hauntId: haunt.id}})
    const amenJoin = await hauntAmenities.findAll({where: {hauntId: haunt.id}})
    const essJoin = await hauntEssentials.findAll({where: {hauntId: haunt.id}})
    const cryJoin = await hauntCryptids.findAll({where: {hauntId: haunt.id}})
    const images = await Image.findAll({where: {hauntId: haunt.id}})
    const bookings = await Booking.findAll({where: {hauntId: haunt.id}})
    const reviews = await Review.findAll({where: {hauntId: haunt.id}})
 
    const combine = [...areaJoin, ...amenJoin, ...essJoin, ...cryJoin, ...images, ...bookings, ...reviews]
    
    combine.forEach(i => i.destroy())
    haunt.destroy();

    res.json()

}))

module.exports = router;