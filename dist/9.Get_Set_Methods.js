"use strict";
class Student {
    get age() {
        return this._age;
    }
    set age(val) {
        this.age = val;
    }
}
const s1 = new Student();
s1.name = "Ajay";
s1.age = 20;
console.log(s1.age);
