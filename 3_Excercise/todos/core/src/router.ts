import * as Hapi from '@hapi/hapi';
import TodoRoutes from './api/todos/todo-routes';
import { IServerConfig } from './configs';
import { IDatabase } from './db';
import Logger from './helpers/logger';

export default class Router {

    public static async loadRoutes(
        server: Hapi.Server,
        serverConfig: IServerConfig,
        database: IDatabase
    ): Promise<any> {
        Logger.info('Router - Start adding routes');

        await new TodoRoutes(serverConfig, database).register(server);

        Logger.info('Router - Finish adding routes');
    }

}