const express = require("express");
const asyncHandler = require("express-async-handler");
const { AreaFeature, hauntAreaFeatures, Amenities, hauntAmenities, Essential, hauntEssentials } = require('../../db/models')

const { Haunt } = require('../../db/models')

const router = express.Router();


// Add a feature
router.post('/:hauntId', asyncHandler(async function(req, res) {
    const {name, icon} = req.body;
    console.log("Hello?")
    const newFeature = await AreaFeature.create({name, icon})
    const join = await hauntAreaFeatures.create({
        areaFeatureId: newFeature.id,
        hauntId: req.params.hauntId
    })
    res.json(newFeature)

}))

module.exports = router;