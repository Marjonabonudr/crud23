const Joi = require('joi');

const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        address: Joi.string().min(3).max(100).required(),
        location: Joi.string().min(3).max(100).required(),
        site: Joi.string().min(3).max(100).required(),
        phone: Joi.string().min(3).max(100).required(),
        schema: Joi.string().min(3).max(100).required(),
        regionId: Joi.number(),
        districtId: Joi.number(),
    });

    return schema.validate(venue)
}

module.exports = { validateVenue };