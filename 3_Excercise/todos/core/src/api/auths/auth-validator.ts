import * as Joi from '@hapi/joi';

export const jwtValidator = {
    headers:
    {
        'authorization': Joi.string().required()
    }
}

export const login = {
    payload: {
        username: Joi.string().required(),
        password: Joi.string().required()
    }
}
