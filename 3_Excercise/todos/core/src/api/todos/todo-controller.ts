import TodoService from '../../api/todos/todo-service';
import CrudController from '../../common/crud-controller';
import { IDatabase } from '../../db';
import { ITask } from '../../models/task';

export default class TodoController extends CrudController<ITask> {

    constructor(private database: IDatabase) {
        super(new TodoService(database));
    }
}