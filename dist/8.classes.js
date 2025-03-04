"use strict";
class Person {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
    greet() {
        console.log(`Hello this is ${this.name} and my age is ${this.age}`);
    }
    getter() {
        return this.age;
    }
    get Age() {
        return this.age;
    }
}
const p1 = new Person("Akshaya", 20);
console.log(p1.name);
p1.greet();
console.log(p1.getter());
console.log(p1.Age);
