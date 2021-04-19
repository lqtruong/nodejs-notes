'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.route([
        {
            method: 'GET',
            path: '/joi/{id}',
            handler: async (req, res) => {
                return `Validate with id ${req.params.id}!`;
            },
            options: {
                validate: {
                    params: Joi.object({
                        id: Joi.number().integer().min(5)
                    }),
                }
            }
        },
        {
            method: 'GET',
            path: '/joi/header',
            handler: async (req, res) => {
                console.log(req.headers);
                return `Validate with id ${req.headers.authorization}!`;
            },
            options: {
                validate: {
                    headers: Joi.object({
                        authorization: Joi.string().required()
                    }),
                    options: {
                        allowUnknown: true
                    }
                }
            }
        }
    ]);

    await server.start();

    return server;
};

process.on('unhandledRejection', (err) => { // for other unhandle rejecction
    console.log(err);
    process.exit(1);
});

initServer()
    .then((server) => console.log(`Server running on ${server.info.uri}, VERSION: ${server.version}`))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });