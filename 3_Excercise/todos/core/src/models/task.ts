import * as Mongoose from 'mongoose';

export interface ITask extends Mongoose.Document {
    name: string;
    desc?: string;
    tags?: string[];
    person: {
        _id: string;
        name: string;
    };
}

export const TaskSchema = new Mongoose.Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: false },
        tags: { type: [String], required: false },
        person: {
            type: new Mongoose.Schema({
                _id: { type: Mongoose.Schema.Types.ObjectId, required: true },
                name: { type: String, required: true }
            }), required: true
        }
    },
    {
        timestamps: true
    }
);

export const TaskModel = Mongoose.model<ITask>('Task', TaskSchema);