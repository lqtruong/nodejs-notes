import TodoResolver from '../../api/todos/resolver';
import CrudController from '../../common/controller';
import { IDatabase } from '../../db';
import { ITask } from '../../models/task';

export default class TodoController extends CrudController<ITask> {

    constructor(database: IDatabase, id?: string) {
        super(id, new TodoResolver(database));
    }
}