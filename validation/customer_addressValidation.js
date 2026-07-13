const Joi = require('joi');

const validateCustomerAddress = (customer_address) => {
    const schema = Joi.object({
        customer_id: Joi.number().required(),
        name: Joi.string().min(3).max(100).required(),
        region_id: Joi.number().required(),
        district_id: Joi.number().required(),
        street: Joi.string().min(3).max(100).required(),
        house: Joi.string().min(3).max(100).required(),
        flat: Joi.string().min(3).max(100).required(),
        location: Joi.string().min(3).max(100).required(),
        post_index: Joi.number().required(),
        info: Joi.string().min(3).max(100).required(),
    });

    return schema.validate(customer_address)
}

module.exports = { validateCustomerAddress };