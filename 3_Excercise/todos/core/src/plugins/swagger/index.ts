import { IPlugin, IPluginOptions } from '../../plugins';
import * as Hapi from '@hapi/hapi';
import Logger from '../../helpers/logger';

const register = async (
    server: Hapi.Server,
    options: IPluginOptions
): Promise<void> => {
    try {
        if (process.env.NODE_ENV === 'dev') {
            await server.register([
                require('@hapi/vision'),
                require('@hapi/inert'),
                {
                    options: options.serverConfig.swagger.options,
                    plugin: require('hapi-swagger')
                }
            ]);
        }
        return;
    } catch (err) {
        Logger.error(`Error registering swagger plugin: ${err}`);
        throw err;
    }
};

export default (): IPlugin => {
    return {
        register,
        info: () => {
            return { name: 'Swagger Documentation', version: '1.0.0' };
        }
    };
};