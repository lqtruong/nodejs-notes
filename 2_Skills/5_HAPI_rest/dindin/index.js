const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const strategies = require('./auth/strategies');

const validate = (decoded, request, h) => {
    return { isValid: true };
};

const initServer = async () => {
    const server = Hapi.server({ port: 4000 });

    // hapi authorization
    await server.register(
        [
            require('@hapi/basic'),
            require('hapi-auth-jwt2')
        ]);
    server.auth.strategy('simple', 'basic', { validate });
    server.auth.default('simple');

    server.auth.strategy('jwt', 'jwt', {
        key: 'NeverShareYourSecret', // Never Share your secret key
        validate
    }); // custom jwt authorization strategy

    server.route(routes);

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


