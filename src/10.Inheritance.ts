class Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal makes a sound");
    }
}

// `Dog` extends `Animal`
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Calls `Animal` constructor
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof Woof!");
    }
}

const dog1 = new Dog("Bruno", "Labrador");
console.log(dog1.name); // ✅ Works
dog1.makeSound(); // Output: Woof Woof!
console.log(dog1.breed); // Output: Labrador