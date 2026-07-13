const Joi = require('joi');

const validateAdmin = (admin) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        login: Joi.string().min(3).max(100).required(),
        hashed_password: Joi.string().min(3).max(100).required(),
        is_active: Joi.boolean().required(),
        is_creator: Joi.boolean().required(),
    });

    return schema.validate(admin)
}

module.exports = { validateAdmin };