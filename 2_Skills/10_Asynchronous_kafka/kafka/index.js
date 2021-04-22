const Hapi = require('@hapi/hapi');
const Routes = require('./router');
require('./events/producer');
require('./events/consumer');

const initServer = async () => {

    const server = Hapi.server(
        {
            port: 4000,
            host: 'localhost'
        }
    );

    server.route(Routes);

    await server.start();

    return server;

};

initServer()
    .then((server) => console.log(`Server running at ${server.info.uri}, VERSION: ${server.version}`))
    .catch(err => console.log(err));