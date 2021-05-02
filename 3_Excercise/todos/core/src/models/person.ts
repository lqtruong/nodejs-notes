export default class Person {
    _id: string;
    name: string;
    username: string;
    password: string;
    tasks?: string[];

    constructor(name: string, username: string, password: string) {
        this._id = '';
        this.name = name;
        this.username = username;
        this.password = password;
    }

}