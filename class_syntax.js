class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName() {
        return this.name + ' ' + this.surname;
    }
    static older(person1, person2) {
        return (person1.age >= person2.age) ? person1 : person2;
    }
}

const truong = new Person("truong", "Le", 30);
const vu = new Person("vu", "Nguyen", 28);
console.log(truong.getFullName());
console.log(vu.getFullName());
console.log(Person.older(truong, vu));

module.exports = Person;