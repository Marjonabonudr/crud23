const Joi = require('joi');

const validateEvent = (event) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        photo: Joi.string().min(3).max(100).required(),
        start_date: Joi.string().required(),
        start_time: Joi.string().required(),
        finish_date: Joi.string().required(),
        finish_time: Joi.string().required(),
        info: Joi.string().min(3).max(100).required(),
        event_type_id: Joi.number().required(),
        human_category_id: Joi.number().required(),
        venue_id: Joi.number().required(),
        lang_id: Joi.number().required(),
        release_date: Joi.string().required(),
    });

    return schema.validate(event)
}

module.exports = { validateEvent };