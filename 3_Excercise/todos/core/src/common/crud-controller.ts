import * as Boom from '@hapi/boom';
import * as Hapi from '@hapi/hapi';
import CrudService from '../common/crud-service';
import Logger from '../helpers/logger';
import reply from '../helpers/response';

export default class CrudController<T> {

    constructor(
        private crudService: CrudService<T>
    ) { }

    public create = async (
        request: Hapi.Request,
        toolkit: Hapi.ResponseToolkit
    ): Promise<any> => {
        try {
            Logger.info(`POST - ${request.url.href}`);

            const data: any = await this.crudService.save(request.payload as any);
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

            const id = encodeURIComponent(request.params.id);

            const updatedEntity: T = await this.crudService.updateOneById(
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
            const id = encodeURIComponent(request.params.id);

            const entity: T = await this.crudService.getOneById(id);

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

            const entities: T[] = await this.crudService.getAll();

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

            const id = encodeURIComponent(request.params.id);

            await this.crudService.deleteOneById(id);

            return toolkit.response(
                reply(request, {
                    value: {},
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