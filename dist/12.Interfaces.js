"use strict";
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    drive() {
        console.log(`Driving at ${this.speed} km/h`);
    }
}
const myCar = new Car(120);
myCar.drive();
