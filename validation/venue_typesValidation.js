const Joi = require('joi');

const validateVenueTypes = (venue_types) => {
    const schema = Joi.object({
        venue_id: Joi.number().required(),
        type_id: Joi.number().required(),
    });

    return schema.validate(venue_types)
}

module.exports = { validateVenueTypes };