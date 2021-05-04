import * as Joi from '@hapi/joi';

export default {
    create: {
        payload: {
            name: Joi.string().required(),
            person: Joi.object().keys({
                _id: Joi.string().required(),
                name: Joi.string().required()
            })
        }
    },
    updateById: {
        params: {
            id: Joi.string().required(),
        },
        payload: {
            name: Joi.string().required(),
            person: Joi.object().keys({
                _id: Joi.string().required(),
                name: Joi.string().required()
            })
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