import * as Mongoose from 'mongoose';

export interface IPerson extends Mongoose.Document {
    name: string;
    email: string;
    username: string;
    password: string;
    tasks?: Array<string>;
}

export const PersonSchema = new Mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        tasks: { type: [String], required: false }
    },
    {
        timestamps: true
    }
);

export const PersonModel = Mongoose.model<IPerson>('Person', PersonSchema);
