import Mongoose from 'mongoose';
import { IDatabaseConfig } from './configs';
import { IPerson, PersonModel } from "./models/person";
import { ITask, TaskModel } from "./models/task";

export interface IDatabase {
    personModel: Mongoose.Model<IPerson>;
    taskModel: Mongoose.Model<ITask>;
};

export function init(config: IDatabaseConfig): IDatabase {
    (<any>Mongoose).Promise = Promise;
    console.log(process.env.MONGO_URI || config.connectionString);
    Mongoose.connect(process.env.MONGO_URI || config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    let mongoDb = Mongoose.connection;

    mongoDb.on("error", () => {
        console.log(`Unable to connect to database: ${config.connectionString}`);
    });

    mongoDb.once("open", () => {
        console.log(`Connected to database: ${config.connectionString}`);
    });

    return {
        personModel: PersonModel,
        taskModel: TaskModel
    };
}
