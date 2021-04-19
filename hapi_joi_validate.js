const Joi = require('@hapi/joi');

const complexSchema = Joi.object().keys({
    name: Joi.string().min(5).max(10),
    email: Joi.string().required(),
    temperature: Joi.number().min(-140).max(140).required()
});

Joi.valid({
    name: "Peter",
    email: "truong@mail.com",
    temperature: 20
}, complexSchema); // OK

Joi.valid({
    name: "so loooooooooooooong",
    email: "truong@mail.com",
    temperature: 500
}, complexSchema); //KO