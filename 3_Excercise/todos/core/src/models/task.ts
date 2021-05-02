import Person from './person';

export default class Task {

    _id: string;
    name: string;
    desc?: string;
    tags?: string[];
    person: {
        _id: string;
        name: string;
    };
    created: Date = new Date();
    modified: Date = new Date();

    constructor(name: string, person: any) {
        this._id = "";
        this.name = name;
        this.person = person;
    }

    public toString() {
        return `ID: ${this._id}, Name: ${this.name}, Description: ${this.desc}`;
    }
}