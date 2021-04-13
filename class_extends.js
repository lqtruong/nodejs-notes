const Person = require("./class_syntax.js");

class PersonWithMiddlename extends Person {
    constructor(name, middlename, surname, age) {
        super(name, surname, age);
        this.middlename = middlename;
    }
    getFullName() {
        return this.name + '' + this.middlename + '' + this.surname;
    }
}

const truong_full = new PersonWithMiddlename("truong", "Quoc", "Le", 30);
const vu_full = new PersonWithMiddlename("vu", "Hoang", "Nguyen", 28);
console.log(truong_full.getFullName());
console.log(vu_full.getFullName());
console.log(Person.older(truong_full, vu_full));
