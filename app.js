function Person (name, age) {
    const person = {};
    person.name = name
    person.age = age
    person.eat = function () {
        console.log('person is eating');
    }
    person.work = function () {
        console.log('person is working');
    }
    return person;
}
Person('sakib',29)
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray);