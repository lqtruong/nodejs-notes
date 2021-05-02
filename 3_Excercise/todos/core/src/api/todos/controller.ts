import TodoResolver from '../../api/todos/resolver';
import CrudController from '../../common/controller';
import Task from '../../models/task';

export default class TodoController extends CrudController<Task> {

    constructor(id?: string) {
        super(id, new TodoResolver());
    }
}