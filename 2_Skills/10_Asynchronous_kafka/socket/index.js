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
            handler: (req, res) => {
                return 'Hello';
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

initServer()
    .then((server) => console.log(`Server running on ${server.info.uri}, VERSION: ${server.version}`))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
