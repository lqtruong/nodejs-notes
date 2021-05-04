import * as Hapi from '@hapi/hapi';
import TodoController from '../../api/todos/controller';
import Validator from '../../api/todos/validator';
import { IServerConfig } from '../../config';
import { IDatabase } from '../../db';
import Logger from '../../helpers/logger';
import IRoute from '../../helpers/route';

export default class TodosRoutes implements IRoute {

    private database: IDatabase;
    private config: IServerConfig;

    constructor(config: IServerConfig, database: IDatabase) {
        this.config = config;
        this.database = database;
    }

    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('TodosRoutes - Start adding todos routes');

            const controller = new TodoController(this.database, 'TODO_ID');

            server.route([
                {
                    method: 'GET',
                    path: '/api/todos',
                    options: {
                        handler: controller.getAll,
                        description: 'To return TODOs from current user.',
                        tags: ['api', 'todos'],
                        auth: false
                    },
                },
                {
                    method: 'POST',
                    path: '/api/todos',
                    options: {
                        handler: controller.create,
                        validate: Validator.create,
                        description: 'To create a TODO for current user',
                        tags: ['api', 'todos'],
                        auth: false
                    },
                },
                {
                    method: 'PUT',
                    path: `/api/todos/{${controller.id}}`,
                    options: {
                        handler: controller.updateById,
                        validate: Validator.updateById,
                        description: 'To update a TODO for current user',
                        tags: ['api', 'todos'],
                        auth: false,
                    },
                },
                {
                    method: 'DELETE',
                    path: `/api/todos/{${controller.id}}`,
                    options: {
                        handler: controller.deleteById,
                        validate: Validator.deleteById,
                        description: 'To delete a TODO for current user by id',
                        tags: ['api', 'todos'],
                        auth: false,
                    },
                },
            ]);

            Logger.info('TodosRoutes - Finish adding todos routes');

            resolve('{OK}');
        });
    }
}