import * as Boom from '@hapi/boom';
import * as Hapi from '@hapi/hapi';
import CrudResolver from '../common/resolver';
import Logger from '../helpers/logger';
import reply from '../helpers/response';

export default class CrudController<T> {
    constructor(
        public id: string = 'id',
        private crudResolver: CrudResolver<T>
    ) { }

    public create = async (
        request: Hapi.Request,
        toolkit: Hapi.ResponseToolkit
    ): Promise<any> => {
        try {
            Logger.info(`POST - ${request.url.href}`);

            const data: any = await this.crudResolver.save(request.payload as any);
            return toolkit.response(
                reply(request, {
                    value: data,
                })
            );
        } catch (error) {
            return toolkit.response(
                reply(request, {
                    boom: Boom.badImplementation(error),
                })
            );
        }
    };

    public updateById = async (
        request: Hapi.Request,
        toolkit: Hapi.ResponseToolkit
    ): Promise<any> => {
        try {
            Logger.info(`PUT - ${request.url.href}`);

            const id = encodeURIComponent(request.params[this.id]);

            const updatedEntity: T = await this.crudResolver.updateOneById(
                id,
                request.payload
            );

            if (!updatedEntity) {
                return toolkit.response(
                    reply(request, {
                        boom: Boom.notFound(),
                    })
                );
            }

            return toolkit.response(
                reply(request, {
                    value: updatedEntity,
                })
            );
        } catch (error) {
            return toolkit.response(
                reply(request, {
                    boom: Boom.badImplementation(error),
                })
            );
        }
    };

    public getById = async (
        request: Hapi.Request,
        toolkit: Hapi.ResponseToolkit
    ): Promise<any> => {
        try {
            Logger.info(`GET - ${request.url.href}`);
            const id = encodeURIComponent(request.params[this.id]);
            
            const entity: T = await this.crudResolver.getOneById(id);

            if (!entity) {
                return toolkit.response(
                    reply(request, {
                        boom: Boom.notFound(),
                    })
                );
            }

            return toolkit.response(
                reply(request, {
                    value: entity,
                })
            );
        } catch (error) {
            return toolkit.response(
                reply(request, {
                    boom: Boom.badImplementation(error),
                })
            );
        }
    };

    public getAll = async (
        request: Hapi.Request,
        toolkit: Hapi.ResponseToolkit
    ): Promise<any> => {
        try {
            Logger.info(`GET - ${request.url.href}`);

            const entities: T[] = await this.crudResolver.getAll();

            return toolkit.response(
                reply(request, {
                    value: entities,
                })
            );
        } catch (error) {
            return toolkit.response(
                reply(request, {
                    boom: Boom.badImplementation(error),
                })
            );
        }
    };

    public deleteById = async (
        request: Hapi.Request,
        toolkit: Hapi.ResponseToolkit
    ): Promise<any> => {
        try {
            Logger.info(`DELETE - ${request.url.href}`);

            const id = encodeURIComponent(request.params[this.id]);

            const deleted: T = await this.crudResolver.deleteOneById(id);

            return toolkit.response(
                reply(request, {
                    value: deleted,
                })
            );
        } catch (error) {
            return toolkit.response(
                reply(request, {
                    boom: Boom.badImplementation(error),
                })
            );
        }
    };
}