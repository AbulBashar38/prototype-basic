
// const person = {};
// person.name = 'Abul Basar';
// person.age = 20;
// person.eat = function () {
//     console.log('person is eating')
// }
// person.sleep = function () {
//     console.log('person is sleeping')
// }

function Person(name, age) {
    const person = Object.create(Person.prototype)
    person.name = name;
    person.age = age;
    return person;
}
Person.prototype={
    eat() {
        console.log('person is eating')
    },
    sleep() {
        console.log('person is sleeping')
    }
}
const kuddos = Person('kuddus', 20);
console.dir(kuddos);
const kobir = Person('kobir', 40);