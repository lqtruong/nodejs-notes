export default class Todo {

    _id: string;

    name: string;

    desc: string;

    created: Date;

    modified: Date;

    constructor(name: string, desc: string) {
        this._id = "";
        this.name = name;
        this.desc = desc;
        this.created = new Date();
        this.modified = new Date();
    }

    public toString() {
        return `ID: ${this._id}, Name: ${this.name}, Description: ${this.desc}`;
    }
}