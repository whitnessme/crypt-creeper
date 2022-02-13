const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const validateBooking = [
    check('startDate')
        .exists({checkFalsy: true})
        .withMessage('Please select a start date')
        .bail()
        .isAfter()
        .withMessage('Please select a future start date')
        .custom((start, { req }) => end >= req.body.endDate)
        .withMessage('Start date must be before end date'),
    check('endDate')
        .exists({checkFalsy: true})
        .withMessage('Please select an end date')
        .bail()
        .isAfter()
        .withMessage('Please select a future end date'),
    check('numOfGuests')
        .exists({checkFalsy: true})
        .withMessage('Please select how many guests'),
    handleValidationErrors
]

module.exports = validateBooking;