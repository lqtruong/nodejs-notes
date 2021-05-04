import Logger from './helpers/logger';
import Server from './server';
import * as Configs from './configs';
import * as Database from './db';

(async () => {
    const serverConfig = Configs.getServerConfig();
    const database = Database.init(Configs.getDatabaseConfig());
    await Server.start(serverConfig, database);
})();

// listen on SIGINT signal and gracefully stop the server
process.on('SIGINT', () => {
    Logger.info('Stopping hapi server');

    Server.stop().then(err => {
        Logger.info(`Server stopped`);
        process.exit(err ? 1 : 0);
    });
});