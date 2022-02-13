const express = require("express");
const asyncHandler = require("express-async-handler");
const validateBooking = require('../validations/booking')
const { Haunt, Image, Review, Cryptid, AreaFeature, Essential, Amenity, Booking, User, hauntAmenities, hauntAreaFeatures, hauntCryptids, hauntEssentials } = require('../../db/models')

const router = express.Router();

// Get all bookings for one user
router.get('/users/:userId', asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll({
        where: {
            userId: req.params.userId
        },
        include: {
            model: Haunt,
            include: Image
        } 
    })
    res.json(bookings)
}));

// Get all bookings for one haunt
router.get('/haunts/:hauntId', asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll({
        where: {
            hauntId: req.params.hauntId
        }})
    res.json(bookings)
}));

// Get specific Booking
router.get('/:bookingId', asyncHandler(async function (req, res) {
    const booking = await Haunt.findByPk(req.params.bookingId, {include:
        {model: Haunt,
        include: Image}
    });
        return res.json(booking)
}));

// Create a booking
router.post('/', validateBooking, asyncHandler(async function(req, res) {
    const { userId, hauntId, numOfGuests, startDate, endDate} = req.body
    const booking = await Booking.create({
        userId,
        hauntId,
        numOfGuests,
        startDate,
        endDate
    });
    res.json(booking)
}))

// Edit a booking
router.put('/:bookingId', validateBooking, asyncHandler(async function(req, res) {
    const { userId, hauntId, startDate, endDate} = req.body
    const booking = await Booking.update({
        userId,
        hauntId,
        startDate,
        endDate
    }, {where: {
        id: req.params.bookingId
    }});
    res.json(booking)
}))
// Delete a booking
router.delete('/:bookingId', asyncHandler(async function(req, res) {
    const booking = await Booking.findByPk(req.params.bookingId);
    booking.destroy();

    res.json()
}))

module.exports = router;