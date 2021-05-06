import { IPlugin, IPluginOptions } from '../plugins';
import * as Hapi from '@hapi/hapi';
import { IPerson, PersonModel } from '../../models/person';
import { IRequest } from '../../interfaces/request';
import { IServerConfig } from '../../configs';

const register = async (
    server: Hapi.Server,
    options: IPluginOptions
): Promise<void> => {
    try {
        const database = options.database;
        const serverConfig = options.serverConfig;

        const validatePerson = async (
            decoded: any,
            request: IRequest,
            h: Hapi.ResponseToolkit
        ) => {
            const person = await database.personModel.findById(decoded.id).lean(true);
            if (!person) {
                return { isValid: false };
            }

            return { isValid: true };
        };

        await server.register(require('hapi-auth-jwt2'));

        return setAuthStrategy(server, {
            config: serverConfig,
            validate: validatePerson
        });
    } catch (err) {
        console.log(`Error registering jwt plugin: ${err}`);
        throw err;
    }
};

const setAuthStrategy = async (server: Hapi.Server, { config, validate }: any) => {
    server.auth.strategy('jwt', 'jwt', {
        key: config.jwt.secret,
        validate,
        verifyOptions: {
            ignoreExpiration: true,
            algorithms: ['HS256']
        }
    });

    server.auth.default('jwt');

    return;
};

export default (): IPlugin => {
    return {
        register,
        info: () => {
            return { name: 'JWT Authentication', version: '1.0.0' };
        }
    };
};