import * as Hapi from '@hapi/hapi';
import Logger from './helpers/logger';
import Router from './router';
import * as DotEnv from 'dotenv';
import { IDatabase } from './db';
import { IServerConfig } from './configs';
import { Plugins } from './plugins/plugins';

export default class Server {

  private static _instance: Hapi.Server;

  public static async start(
    serverConfig: IServerConfig,
    database: IDatabase
  ): Promise<Hapi.Server> {
    try {
      DotEnv.config({
        path: `${process.cwd()}/.env`,
      });

      Server._instance = new Hapi.Server({
        port: process.env.PORT,
      });

      Server._instance.validator(require('@hapi/joi'));

      await Plugins.registerAll(Server._instance, serverConfig, database);
      await Router.loadRoutes(Server._instance, serverConfig, database);

      await Server._instance.start();

      Logger.info(
        `Server - Up and running at http://${process.env.HOST}:${process.env.PORT}`
      );
      Logger.info(
        `Server - Visit http://${process.env.HOST}:${process.env.PORT}/api/* for REST API`
      );
      Logger.info(
        `Server - Visit http://${process.env.HOST}:${process.env.PORT}/documentation for Swagger docs`
      );
      Logger.info(
        `Server - Visit http://${process.env.HOST}:${process.env.PORT}/status for Node.js health status`
      );

      return Server._instance;
    } catch (error) {
      Logger.info(`Server - There was something wrong: ${error}`);

      throw error;
    }
  }

  public static stop(): Promise<Error | void> {
    Logger.info(`Server - Stopping execution`);

    return Server._instance.stop();
  }

  public static async recycle(
    serverConfig: IServerConfig,
    database: IDatabase
  ): Promise<Hapi.Server> {
    Logger.info(`Server - Recycling instance`);

    await Server.stop();

    return await Server.start(serverConfig, database);
  }

  public static instance(): Hapi.Server {
    return Server._instance;
  }

  public static async inject(
    options: string | Hapi.ServerInjectOptions
  ): Promise<Hapi.ServerInjectResponse> {
    return await Server._instance.inject(options);
  }
}