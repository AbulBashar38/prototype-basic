
const person = {};
person.name = 'Abul Basar';
person.age = 20;
person.eat = function () {
    console.log('person is eating')
}
person.sleep = function () {
    console.log('person is sleeping')
}
const personShareMethod = {
    eat() {
        console.log('person is eating')
    },
    sleep() {
        console.log('person is sleeping')
    }
}
function Person(name, age) {
    const person = {};
    person.name = name;
    person.age = age;
    person.eat = personShareMethod.eat;
    person.sleep = personShareMethod.sleep;
    return person;
}
console.log(Person('kuddus', 20));
console.log(Person('kobir', 40));