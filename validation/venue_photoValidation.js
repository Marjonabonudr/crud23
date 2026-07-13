const Joi = require('joi');

const validateVenuePhoto = (venue_photo) => {
    const schema = Joi.object({
        venue_id: Joi.number().required(),
        url: Joi.string().min(3).max(100).required(),
    });

    return schema.validate(venue_photo)
}

module.exports = { validateVenuePhoto };