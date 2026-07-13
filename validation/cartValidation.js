const Joi = require('joi');

const validateCart = (cart) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().required(),
        created_at: Joi.date().required(),
        finished_at: Joi.date().required(),
        status_id: Joi.number().integer().required(),
    });

    return schema.validate(cart)
}

module.exports = { validateCart };