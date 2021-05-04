import * as Hapi from '@hapi/hapi';
import TodosRoutes from './api/todos/routes';
import { IServerConfig } from './config';
import { IDatabase } from './db';
import Logger from './helpers/logger';

export default class Router {

    public static async loadRoutes(
        server: Hapi.Server,
        serverConfig: IServerConfig,
        database: IDatabase
    ): Promise<any> {
        Logger.info('Router - Start adding routes');

        await new TodosRoutes(serverConfig, database).register(server);

        Logger.info('Router - Finish adding routes');
    }

}