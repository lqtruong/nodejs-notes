'use strict';

const Hapi = require('@hapi/hapi');
const Videos = require('./hapi_wreck_video');

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/video',
        handler: Videos
    });

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