const Joi = require('joi');

const validateCustomerCard = (customerCard) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().required(),
        name: Joi.string().min(3).max(100).required(),
        phone: Joi.string().min(3).max(100).required(),
        number: Joi.string().min(3).max(100).required(),
        year: Joi.number().integer().required(),
        month: Joi.number().integer().required(),
        is_active: Joi.boolean().required(),
        is_main: Joi.boolean().required(),
    });

    return schema.validate(customerCard)
}

module.exports = { validateCustomerCard };