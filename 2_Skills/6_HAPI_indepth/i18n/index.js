'use strict';

import Hapi from '@hapi/hapi';
import Accept from '@hapi/accept';
import Routes from './routes.js';
import Vision from '@hapi/vision';
import Handlebars from 'handlebars';
import Path from 'path';

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost',
        app: {
            i18n: {
                supportedLanges: ['en', 'fr'],
                defaultLang: 'en'
            }
        }
    });

    // hapi authorization
    await server.register(
        [
            Vision
        ]);

    // web configuration


    server.views({
        engines: {
            html: Handlebars
        },
        relativeTo: Path.resolve(),
        path: './templates',
        layoutPath: './templates/layout',
        helpersPath: './templates/helpers'
    });

    server.route(Routes);

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

