import * as Hapi from '@hapi/hapi';
import * as AuthValidator from '../../api/auths/auth-validator';
import { IServerConfig } from '../../configs';
import { IDatabase } from '../../db';
import Logger from '../../helpers/logger';
import IRoute from '../../helpers/route';
import AuthController from './auth-controller';

export default class AuthRoutes implements IRoute {

    constructor(
        private serverConfig: IServerConfig,
        private database: IDatabase) { }

    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('AuthRoutes - Start adding authentication & authorization routes');

            const controller = new AuthController(this.serverConfig, this.database);

            server.route([
                {
                    method: 'GET',
                    path: '/api/user',
                    options: {
                        handler: controller.current,
                        description: 'To return current user info.',
                        tags: ['api', 'user'],
                        auth: 'jwt',
                        validate: AuthValidator.jwtValidator,
                        plugins: {
                            "hapi-swagger": {
                                responses: {
                                    "200": {
                                        description: "User founded."
                                    },
                                    "401": {
                                        description: "Please login."
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    method: 'POST',
                    path: `/api/login`,
                    options: {
                        handler: controller.login,
                        validate: AuthValidator.login,
                        description: 'To login user with basic authentication.',
                        tags: ['api', 'logins'],
                        auth: false
                    },
                }

            ]);

            Logger.info('AuthRoutes - Finish adding authentication & authorization routes');

            resolve('{OK}');
        });
    }
}