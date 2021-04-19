const Joi = require('@hapi/joi');

const schema = Joi.date()
    .min('12-01-2015')
    .max('12-31-2015')
    .iso();

Joi.assert('2015-12-29', schema);
// Joi.assert('2015-01-29', schema); // wrong validation

console.log(schema);


const complexSchema = Joi.object().keys({
    name: Joi.string().min(5).max(10),
    email: Joi.string().required(),
    temperature: Joi.number().min(-140).max(140).required()
});

Joi.assert({
    name: "Peter",
    email: "truong@mail.com",
    temperature: 20
}, complexSchema); // OK

Joi.assert({
    name: "so loooooooooooooong",
    email: "truong@mail.com",
    temperature: 500
}, complexSchema); //KO