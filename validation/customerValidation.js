const Joi = require('joi');

const validateCustomer = (customer) => {
    const schema = Joi.object({
        first_name: Joi.string().min(3).max(100).required(),
        last_name: Joi.string().min(3).max(100).required(),
        phone: Joi.string().min(3).max(100).required(),
        hashed_password: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(3).max(100).required(),
        birth_date: Joi.string().required(),
        gender: Joi.string().required(),
        lang_id: Joi.number().required(),
        hashed_refresh_token: Joi.string().min(3).max(100).required(),
    });

    return schema.validate(customer)
}

module.exports = { validateCustomer };