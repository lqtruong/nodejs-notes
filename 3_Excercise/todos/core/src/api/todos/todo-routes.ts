import * as Hapi from '@hapi/hapi';
import TodoController from '../../api/todos/todo-controller';
import TodoValidator from '../../api/todos/todo-validator';
import { IServerConfig } from '../../configs';
import { IDatabase } from '../../db';
import Logger from '../../helpers/logger';
import IRoute from '../../helpers/route';

export default class TodoRoutes implements IRoute {

    constructor(
        private serverConfig: IServerConfig,
        private database: IDatabase) { }

    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('TodoRoutes - Start adding todos routes');

            const controller = new TodoController(this.database);

            server.route([
                {
                    method: 'GET',
                    path: `/api/todos/{id}`,
                    options: {
                        handler: controller.getById,
                        description: 'To return a TODO from id.',
                        tags: ['api', 'todos'],
                        auth: 'jwt'
                    },
                },
                {
                    method: 'GET',
                    path: '/api/todos',
                    options: {
                        handler: controller.getAll,
                        description: 'To return TODOs from current user.',
                        tags: ['api', 'todos'],
                        auth: 'jwt'
                    },
                },
                {
                    method: 'POST',
                    path: '/api/todos',
                    options: {
                        handler: controller.create,
                        // validate: TodoValidator.create,
                        description: 'To create a TODO for current user',
                        tags: ['api', 'todos'],
                        auth: 'jwt'
                    },
                },
                {
                    method: 'PUT',
                    path: '/api/todos/{id}',
                    options: {
                        handler: controller.updateById,
                        // validate: TodoValidator.updateById,
                        description: 'To update a TODO for current user',
                        tags: ['api', 'todos'],
                        auth: 'jwt',
                    },
                },
                {
                    method: 'DELETE',
                    path: '/api/todos/{id}',
                    options: {
                        handler: controller.deleteById,
                        validate: TodoValidator.deleteById,
                        description: 'To delete a TODO for current user by id',
                        tags: ['api', 'todos'],
                        auth: 'jwt',
                    },
                },
            ]);

            Logger.info('TodoRoutes - Finish adding todos routes');

            resolve('{OK}');
        });
    }
}