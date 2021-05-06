import * as Configs from '../configs';
import * as Hapi from '@hapi/hapi';
import { IDatabase } from '../db';

export interface IPluginOptions {
    database: IDatabase;
    serverConfig: Configs.IServerConfig;
}

export interface IPlugin {
    register(server: Hapi.Server, options?: IPluginOptions): Promise<void>;
    info(): IPluginInfo;
}

export interface IPluginInfo {
    name: string;
    version: string;
}