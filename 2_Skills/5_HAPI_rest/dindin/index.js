const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const strategies = require('./auth/strategies');
const configs = require('./config.json');

const initServer = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    // hapi authorization
    await server.register(
        [
            require('hapi-auth-jwt2')
        ]);
    server.auth.strategy('jwt', 'jwt',
        {
            key: configs.jwt.secret,  // Never Share your secret key
            validate: strategies.validateAuthorizationHeader,
            verifyOptions: {
                ignoreExpiration: true,
                algorithms: ['HS256']
            }
        }); // custom jwt authorization strategy
    server.auth.default('jwt');

    // example 
    // curl -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJscXRydW9uZ0BtYWlsLmNvbSIsImZ1bGxOYW1lIjoiVHJ1b25nIExlIiwiaWF0IjoxNjE4ODEyNzY1LCJleHAiOjE2MTk0MTc1NjV9.0wmuoK-COv2bUuxMB50U5cT83J4IWLXCCyY5Kx8Zik8' localhost:4000

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


