import TodoResolver from '../../api/todos/resolver';
import CrudController from '../../common/base-controller';
import Todo from '../../models/todo';

export default class TodoController extends CrudController<Todo> {

    constructor(id?: string) {
        super(id, new TodoResolver());
    }
}