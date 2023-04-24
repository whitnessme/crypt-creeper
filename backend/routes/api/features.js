const express = require("express");
const asyncHandler = require("express-async-handler");
const { AreaFeature, hauntAreaFeatures, Amenity, hauntAmenities, Essential, hauntEssentials } = require('../../db/models')

const { Haunt } = require('../../db/models')

const router = express.Router();

// Get All Feature for a Haunt
router.get('/:hauntId', asyncHandler(async (req, res) => {

    const { hauntId } = req.params
    const area = await AreaFeature.findAll({
        include: [{
            model: Haunt,
            where: {
                id: hauntId
            }
        }]
    })
    const essentials = await Essential.findAll({
        include: [{
            model: Haunt,
            where: {
                id: hauntId
            }
        }]
    })
    const amenities = await Amenity.findAll({
        include: [{
            model: Haunt,
            where: {
                id: hauntId
            }
        }]
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
    if (req.params.type === "essentials") {
        newFeature = await Essential.create({name, icon})
        await hauntEssentials.create({
            essentialId: newFeature.id,
            hauntId: req.params.hauntId
        })
    }
    if (req.params.type === "amenities") {
        newFeature = await Amenity.create({name, icon})
        await hauntAmenities.create({
            amenityId: newFeature.id,
            hauntId: req.params.hauntId
        })
    }
    res.json(newFeature)

}))

module.exports = router;