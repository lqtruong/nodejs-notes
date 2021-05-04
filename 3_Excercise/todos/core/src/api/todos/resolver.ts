import Repository from '../../common/repository';
import Resolver from '../../common/resolver';
import { IDatabase } from '../../db';
import { ITask } from '../../models/task';

export default class TodoResolver extends Resolver<ITask> {
    constructor(private database: IDatabase) {
        super(new Repository(database));
    }
}