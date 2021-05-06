import CrudRepository from '../../common/crud-repository';
import { IDatabase } from '../../db';
import { IPerson } from '../../models/person';

export class PersonRepository implements CrudRepository<IPerson> {

    constructor(private database: IDatabase) { }

    save(data: IPerson): Promise<IPerson> {
        return Promise.resolve(this.database.personModel.create(data));
    }
    getById(_id: string): Promise<IPerson> {
        return Promise.resolve(this.database.personModel.findById(_id));
    }
    getAll(): Promise<IPerson[]> {
        return Promise.resolve(this.database.personModel.find());
    }
    updateById(_id: string, data: IPerson): Promise<IPerson> {
        return Promise.resolve(this.database.personModel.findByIdAndUpdate(_id, data, { new: true }));
    }
    deleteById(_id: string): Promise<IPerson> {
        return Promise.resolve(this.database.personModel.findByIdAndDelete(_id));
    }

    findByUsername(username: string): Promise<IPerson> {
        return Promise.resolve(this.database.personModel.findOne({ username: username }));
    }
}