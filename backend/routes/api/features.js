const express = require("express");
const asyncHandler = require("express-async-handler");
const { AreaFeature, hauntAreaFeatures, Amenities, hauntAmenities, Essential, hauntEssentials } = require('../../db/models')

const { Haunt } = require('../../db/models')

const router = express.Router();


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