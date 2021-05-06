import { IServerConfig } from '../configs';
import { IDatabase } from '../db';
import Logger from '../helpers/logger';
import * as Hapi from '@hapi/hapi';
import { IPlugin } from '.';

export class Plugins {

    public static async registerAll(
        server: Hapi.Server,
        serverConfig: IServerConfig,
        database: IDatabase
    ): Promise<any> {
        Logger.info('Plugins - Start registering Hapi plugins');

        //  Setup Hapi Plugins
        const plugins: Array<string> = serverConfig.plugins;
        const pluginOptions = {
            database: database,
            serverConfig: serverConfig
        };

        let pluginPromises: Promise<any>[] = [];

        plugins.forEach((pluginName: string) => {
            var plugin: IPlugin = require('./' + pluginName).default();
            Logger.info(
                `Register Plugin ${plugin.info().name} v${plugin.info().version}`
            );
            pluginPromises.push(plugin.register(server, pluginOptions));
        });

        await Promise.all(pluginPromises);

        Logger.info('Plugins - Finish registering Hapi plugins');
    }


}