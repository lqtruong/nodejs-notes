import * as Hapi from '@hapi/hapi';
import TodosRoutes from './api/todos/routes';
import Logger from './helpers/logger';

export default class Router {

    public static async loadRoutes(server: Hapi.Server): Promise<any> {
        Logger.info('Router - Start adding routes');

        await new TodosRoutes().register(server);

        Logger.info('Router - Finish adding routes');
    }

}