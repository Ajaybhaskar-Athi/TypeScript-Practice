"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log("Woof Woof!");
    }
}
const dog1 = new Dog("Bruno", "Labrador");
console.log(dog1.name);
dog1.makeSound();
console.log(dog1.breed);
