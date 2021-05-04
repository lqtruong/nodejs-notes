import CrudResolver from '../../common/resolver';
import { IDatabase } from '../../db';
import { ITask } from '../../models/task';
import { TaskRepository } from './todo-repository';

export default class TodoResolver extends CrudResolver<ITask> {
    constructor(private database: IDatabase) {
        super(new TaskRepository(database));
    }
}