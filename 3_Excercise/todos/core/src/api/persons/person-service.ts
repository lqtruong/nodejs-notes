import CrudService from '../../common/crud-service';
import { IDatabase } from '../../db';
import { IPerson } from '../../models/person';
import { PersonRepository } from './person-repository';

export default class PersonService extends CrudService<IPerson> {

    constructor(database: IDatabase) {
        super(new PersonRepository(database));
    }

    public async getOneByUsername(username: string): Promise<IPerson> {
        return await (this.repository as PersonRepository).findByUsername(username);
    }

}