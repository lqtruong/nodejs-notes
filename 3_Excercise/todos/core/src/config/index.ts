import * as nconf from 'nconf';
import * as path from 'path';

const configs = nconf
    .argv()
    .env()
    .file(path.join(__dirname, `./config/config.${process.env.NODE_ENV || "dev"}.json`));

export interface IServerConfig {
    port: number;
    jwt: {
        secret: string;
        expired: string;
    },
    route: {
        prefix: string;
    },
    api: {
        cors: ["*"]
    },
    plugins: Array<string>,
    swagger: {
        options: {
            info: {
                title: string,
                version: string,
                contact: {
                    name: string,
                    email: string
                }
            },
            grouping: string,
            sortEndpoints: string
        }
    },
    status: {
        options: {
            path: string,
            title: string,
            routeConfig: {
                auth: boolean
            }
        }
    }
};

export interface IDatabaseConfig {
    connectionString: string
};

export function getDatabaseConfig(): IDatabaseConfig {
    return configs.get("database");
};

export function getServerConfig(): IServerConfig {
    return configs.get("server");
}