import CrudService from '../../common/crud-service';
import { IDatabase } from '../../db';
import { ITask } from '../../models/task';
import { TaskRepository } from './todo-repository';

export default class TodoService extends CrudService<ITask> {

    constructor(private database: IDatabase) {
        super(new TaskRepository(database));
    }

}