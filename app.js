
// const person = {};
// person.name = 'Abul Basar';
// person.age = 20;
// person.eat = function () {
//     console.log('person is eating')
// }
// person.sleep = function () {
//     console.log('person is sleeping')
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    eat() {
        console.log('person is eating')
    };
    sleep() {
        console.log('person is sleeping')
    }
}
const kuddos = new Person('kuddus', 20);
kuddos.sleep()
const kobir = new Person('kobir', 40);