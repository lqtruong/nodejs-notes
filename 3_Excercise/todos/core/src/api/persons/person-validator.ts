import * as Joi from '@hapi/joi';

export default {
    create: {
        payload: {
            name: Joi.string().required(),
            email: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    },
    updateById: {
        params: {
            id: Joi.string().required(),
        },
        payload: {
            name: Joi.string().required(),
            email: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required()
        },
    },
    getById: {
        params: {
            id: Joi.string().required(),
        },
    },
    deleteById: {
        params: {
            id: Joi.string().required(),
        },
    },
};