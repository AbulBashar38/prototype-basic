# prototype-basic
মনে করি আমরা একটা person এর অব্জেক্ট তৈরি করবো যার কিছু প্রপার্টি আর মেথড থাকবে
```javascript
const person = {};
person.name = 'Abul Basar';
person.age = 20;
person.eat= function (){
    console.log('person is eating')
}
person.sleep = function(){
    console.log('person is sleeping')
}
```
এখন আমরা যদি এই person object কে বার বার use করতে চাই তাহলে এই পুরো object কে একটা function এর মধ্যে রেখে বার বার call করতে পারবো।
```javascript
function Person(name, age) {
    const person = {};
    person.name = name;
    person.age = age;
    person.eat = function () {
        console.log('person is eating')
    }
    person.sleep = function () {
        console.log('person is sleeping')
    }
    return person;
}
const sakib = Person('sakib',34)

const tamim = Person('tamim',32)
```
এখন আমরা যত জন ব্যাক্তির জন্য Person function কে call করবো ততটা person নামের object তৈরি হবে তার প্রপার্টি হিসাবে ততটা name,age,eat,sleep তৈরি হবে। এখনে eat এবং sleep property একই object বার বার তৈরি হচ্ছে। আমরা eat এবং sleep প্রপার্টি function গুলাকে Person এর বাইরে একটা object এর ভিতরে eat() এবং sleep() method তৈরি করে ব্যবহার করতে পারি। এতে eat আর sleep বার বার object তৈরি করছে নাহ একবার তৈরি করা object কে বার বার use করতে পারছে।
```javascript
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
const sakib = Person('sakib',34)

const tamim = Person('tamim',32)
```
এখন আমরা যদি personShareMethod এ কোনো method add করি তাহলে Person এর ভিতরেও অই method apply হবে।
```javascript
const personShareMethod = {
    eat() {
        console.log('person is eating')
    },
    sleep() {
        console.log('person is sleeping')
    }
    play(){
        console.log('person is playing')
    }
    chill(){
        console.log('person is Chilling')
    }
}
function Person(name, age) {
    const person = {};
    person.name = name;
    person.age = age;
    person.eat = personShareMethod.eat;
    person.sleep = personShareMethod.sleep;
    person.play = personShareMethod.play;
    person.chill = personShareMethod.chill;
    return person;
}
const sakib = Person('sakib',34)

const tamim = Person('tamim',32)
```
তাহলে এইটা ও একটু সমস্যা কারন আমাদের দুই জায়গায় ই কোড লিখতে হচ্ছে আমরা চাইলে এইটাকে ও একটু সহজ ভাবে লিখতে পারি person এর মধ্যে Object.create() apply করে। তাহলে personShareMethod parent object এর মধ্যে person নামের object create হচ্ছে। এই person object personShareMethod অব্জেক্ট এর সব প্রপার্টি access করতে পারবে।
```javascript
const personShareMethod = {
    eat() {
        console.log('person is eating')
    },
    sleep() {
        console.log('person is sleeping')
    },
    play(){
        console.log('person is playing')
    },
    chill(){
        console.log('person is Chilling')
    }
}
function Person(name, age) {
    const person = Object.create(personShareMethod);
    person.name = name;
    person.age = age;
    return person;
}
const sakib = Person('sakib',34)
sakib.eat() // person is eating
const tamim = Person('tamim',32)
```
এখানে আমরা method গুলো personShareMethod এ না রেখে Person এর prototype এর মধ্যে রেখে দিতে পারি। তাহলে personShareMethod এর মতো বাইরে কোনো object create করতে হচ্ছে নাহ।
** Prototype হলো javascript এর যেকোনো একটা function এর প্রপার্টি যেটা একটা object কে point করে।**
```javascript

function Person(name, age) {
    const person = Object.create(Person.prototype);
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
    },
    play(){
        console.log('person is playing')
    },
    chill(){
        console.log('person is Chilling')
    }
}
const sakib = Person('sakib',34)
sakib.eat() // person is eating
const tamim = Person('tamim',32)
```