import * as Hapi from '@hapi/hapi';
import PersonController from '../../api/persons/person-controller';
import PersonValidator from '../../api/persons/person-validator';
import { IServerConfig } from '../../configs';
import { IDatabase } from '../../db';
import Logger from '../../helpers/logger';
import IRoute from '../../helpers/route';

export default class PersonRoutes implements IRoute {

    constructor(
        private serverConfig: IServerConfig,
        private database: IDatabase) {}

    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('PersonRoutes - Start adding persons routes');

            const controller = new PersonController(this.database);

            server.route([
                {
                    method: 'GET',
                    path: `/api/persons/{id}`,
                    options: {
                        handler: controller.getById,
                        description: 'To return a Person from id.',
                        tags: ['api', 'persons'],
                        auth: 'jwt'
                    },
                },
                {
                    method: 'GET',
                    path: '/api/persons',
                    options: {
                        handler: controller.getAll,
                        description: 'To return all Persons.',
                        tags: ['api', 'persons'],
                        auth: 'jwt'
                    },
                },
                {
                    method: 'POST',
                    path: '/api/persons',
                    options: {
                        handler: controller.create,
                        // validate: PersonValidator.create,
                        description: 'To create a Person',
                        tags: ['api', 'persons'],
                        auth: 'jwt'
                    },
                },
                {
                    method: 'PUT',
                    path: '/api/persons/{id}',
                    options: {
                        handler: controller.updateById,
                        // validate: PersonValidator.updateById,
                        description: 'To update a Person',
                        tags: ['api', 'persons'],
                        auth: 'jwt',
                    },
                },
                {
                    method: 'DELETE',
                    path: '/api/persons/{id}',
                    options: {
                        handler: controller.deleteById,
                        validate: PersonValidator.deleteById,
                        description: 'To delete a Person by id',
                        tags: ['api', 'persons'],
                        auth: 'jwt',
                    },
                },
            ]);

            Logger.info('PersonRoutes - Finish adding persons routes');

            resolve('{OK}');
        });
    }
}