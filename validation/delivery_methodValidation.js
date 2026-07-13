const Joi = require('joi');

const validateDeliveryMethod = (deliveryMethod) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
    });

    return schema.validate(deliveryMethod)
}

module.exports = { validateDeliveryMethod };