import Repository from '../../common/repository';
import Resolver from '../../common/resolver';
import Task from '../../models/task';

export default class TodoResolver extends Resolver<Task> {
    constructor() {
        super(new Repository());
    }
}