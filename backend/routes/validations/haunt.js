const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

export const validateHaunt = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name'),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an address'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a city'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Please provide the country'),
    check('closeLandmark')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a nearby landmark'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a price per night')
        .bail()
        .isInt({ min: 5 })
        .withMessage('Price must be at least $5 per night'),
    check('summary')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a summary')
        .bail()
        .split(" ").isLength({ min: 10 })
        .withMessage('Please provide a summary of at least 10 words'),
    handleValidationErrors
]
