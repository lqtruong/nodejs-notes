import CrudRepository from "../../common/crud-repository";
import { IDatabase } from "../../db";
import { ITask } from "../../models/task";

export class TaskRepository implements CrudRepository<ITask> {

    constructor(private database: IDatabase) { }

    save(data: ITask): Promise<ITask> {
        return Promise.resolve(this.database.taskModel.create(data));
    }
    getById(_id: string): Promise<ITask> {
        return Promise.resolve(this.database.taskModel.findById(_id));
    }
    getAll(): Promise<ITask[]> {
        return Promise.resolve(this.database.taskModel.find());
    }
    updateById(_id: string, data: ITask): Promise<ITask> {
        return Promise.resolve(this.database.taskModel.findByIdAndUpdate(_id, data, { new: true }));
    }
    deleteById(_id: string): Promise<ITask> {
        return Promise.resolve(this.database.taskModel.findByIdAndDelete(_id));
    }


}