import Repository from '../../common/base-repository';
import Resolver from '../../common/base-resolver';
import Todo from '../../models/todo';

export default class TodoResolver extends Resolver<Todo> {
    constructor() {
        super(new Repository());
    }
}