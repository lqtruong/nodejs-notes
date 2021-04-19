'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');

const getBooks = async () => {
    return [
        {
            name: "abc",
            year: 2012,
            isbn: "123"
        },
        {
            name: "def",
            year: 2008,
            isbn: "456"
        }
    ];
};

const bookSchema = Joi.object({
    name: Joi.string().required(),
    year: Joi.number().min(2009),
    isbn: Joi.string().length(10)
});

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.route([
        {
            method: 'GET',
            path: '/joi/response',
            handler: async (req, res) => {
                return await getBooks();
            },
            options: {
                response: {
                    schema: Joi.array().items(bookSchema),
                    // failAction: 'log'
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