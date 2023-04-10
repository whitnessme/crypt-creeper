const express = require("express");
const asyncHandler = require("express-async-handler");
const { AreaFeature, hauntAreaFeatures, Amenities, hauntAmenities, Essential, hauntEssentials } = require('../../db/models')

const { Haunt } = require('../../db/models')

const router = express.Router();

// Get All Feature for a Haunt
router.get('/:hauntId', asyncHandler(async (req, res) => {
    const { hauntId } = req.params.hauntId
    const area = await AreaFeature.findAll({
        where: {hauntId}
    })
    const essentials = await Essential.findAll({
        where: {hauntId}
    })
    const amenities = await Amenities.findAll({
        where: {hauntId}
    })
    // return an object with 3 keys
    res.json({area, essentials, amenities})
}))

// Add a feature
router.post('/:hauntId/:type', asyncHandler(async function(req, res) {
    const {name, icon} = req.body;
    let newFeature;
    if (req.params.type === "area") {
        newFeature = await AreaFeature.create({name, icon})
        await hauntAreaFeatures.create({
            areaFeatureId: newFeature.id,
            hauntId: req.params.hauntId
        })
    }
    if (req.params.type === "essential") {
        newFeature = await Essential.create({name, icon})
        await hauntEssentials.create({
            areaFeatureId: newFeature.id,
            hauntId: req.params.hauntId
        })
    }
    res.json(newFeature)

}))

module.exports = router;