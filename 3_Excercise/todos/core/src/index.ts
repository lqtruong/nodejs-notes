import Logger from './helpers/logger';
import Server from './server';
import * as Config from './config';
import * as Database from './db';

(async () => {
    const dbConfig = Config.getDatabaseConfig();
    const database = Database.init(dbConfig);
    const serverConfig = Config.getServerConfig();
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