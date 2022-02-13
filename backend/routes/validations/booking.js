const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const validateBooking = [
    check(startDate)
        .exists({checkFalsy: true})
        .withMessage('Please select a start date'),
    check(endDate)
        .exists({checkFalsy: true})
        .withMessage('Please select an end date')
    ,
    handleValidationErrors
]