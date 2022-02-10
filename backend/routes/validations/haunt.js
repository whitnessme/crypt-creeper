const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const validateHaunt = [
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
        .isLength({ min: 80 })
        .withMessage('Please provide a summary of at least 80 characters'),
    handleValidationErrors
];

module.exports = validateHaunt;