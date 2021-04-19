const Hapi = require('@hapi/hapi');

const add = (x, y) => {
    return x + y;
};

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.method('add', add, {
        generateKey: (a, b) => "" + a + "_" + b,
        cache: {
            expiresIn: 60000,
            staleIn: 30000,
            staleTimeout: 10000,
            generateTimeout: 100
        }
    });
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (req, res) => {
                return 'hello';
            }
        }
    ]);

    server.methods.add(2, 4);

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

