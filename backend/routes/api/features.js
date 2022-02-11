const express = require("express");
const asyncHandler = require("express-async-handler");
const { AreaFeature, hauntAreaFeatures, Amenities, hauntAmenities, Essential, hauntEssentials } = require('../../db/models')

const { Haunt } = require('../../db/models')

const router = express.Router();


// Add a feature
router.post('/areaFeature/:hauntId', asyncHandler(async function(req, res) {
    const {name, icon} = req.body;
    const newFeature = await AreaFeature.findOrcreate({name, icon})
    const join = await hauntAreaFeatures.findOrcreate({
        areaFeatureId: newFeature.id,
        hauntId: req.params.hauntId
    })
    res.json(newFeature)

}))