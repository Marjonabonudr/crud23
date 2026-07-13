const Joi = require('joi');

const validateEventType = (eventType) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        parent_event_type_id: Joi.number().required(),
    });

    return schema.validate(eventType)
}

module.exports = { validateEventType };