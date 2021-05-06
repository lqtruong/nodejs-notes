import * as Hapi from '@hapi/hapi';
import * as Boom from '@hapi/boom';
import { IServerConfig } from '../../configs';
import { IDatabase } from '../../db';
import { IPerson } from '../../models/person';
import { generateToken, comparePassword } from '../../helpers/secure';
import PersonService from '../persons/person-service'
import CrudController from '../../common/crud-controller';

export default class AuthController extends CrudController<IPerson> {

    private serverConfig: IServerConfig;

    constructor(serverConfig: IServerConfig, private database: IDatabase) {
        super(new PersonService(database));
        this.serverConfig = serverConfig;
    }

    public async login(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const { username, password }: any = request.payload;
        // (this.crudService as PersonService)
        // let person: IPerson = await this.database.personModel.findOne({ username: username });
        let person: IPerson = await (super.crudService as PersonService).getOneByUsername(username);

        if (!person) {
            return Boom.unauthorized('User does not exists.');
        }

        if (!comparePassword(password, person.password)) {
            return Boom.unauthorized('Password is invalid.');
        }

        return { token: generateToken(person, this.serverConfig.jwt.secret, this.serverConfig.jwt.expired) };
    }

    public async current(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        const id = request.auth.credentials?.id as string;
        return await this.database.personModel.findById(id);
    }

}