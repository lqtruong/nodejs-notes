const Hapi = require('@hapi/hapi');

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    await server.register([
        {
            plugin: require('./plugins/browsings'),
            options: {
                name: 'Bob'
            }
        },
        {
            plugin: require('./plugins/db')
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
    .then((srv) => console.log(`Server running on ${srv.info.uri}, VERSION: ${srv.version}`))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });


