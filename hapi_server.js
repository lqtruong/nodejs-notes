'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/en',
        handler: (request, reply) => {

            return 'Hello!';
        }
    });

    server.route({
        method: 'GET',
        path: '/cn',
        handler: function (request, reply) {

            return '你好!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
