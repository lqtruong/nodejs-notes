import { IPlugin, IPluginOptions } from '../../plugins';
import * as Hapi from '@hapi/hapi';
import Logger from '../../helpers/logger';

const register = async (
    server: Hapi.Server,
    options: IPluginOptions
): Promise<void> => {
    try {
        if (process.env.NODE_ENV === 'dev') {
            await server.register({
                options: options.serverConfig.status.options,
                plugin: require('hapijs-status-monitor')
            });
        }
        return;
    } catch (err) {
        Logger.error(`Error registering hapijs-status-monitor plugin: ${err}`);
        throw err;
    }
};

export default (): IPlugin => {
    return {
        register,
        info: () => {
            return { name: 'Hapi Node.js Status Monitoring', version: '1.0.0' };
        }
    };
};