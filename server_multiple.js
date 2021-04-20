const Hapi = require('@hapi/hapi');

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: function (req, h) {
                return `Hello server ${server.info.uri}. Welcome!`;
            }
        }
    ]);

    await server.start();

    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

const initServer2 = async () => {
    const server = Hapi.server({
        port: 4001,
        host: 'localhost'
    });
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: function (req, h) {
                return `Hello server ${server.info.uri}. Welcome!`;
            }
        }
    ]);
    await server.start();

    return server;
};

initServer()
    .then((srv) => console.log(`Server running on ${srv.info.uri}, VERSION: ${srv.version}`))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

initServer2()
    .then((srv) => console.log(`Server2 running on ${srv.info.uri}, VERSION: ${srv.version}`))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });


