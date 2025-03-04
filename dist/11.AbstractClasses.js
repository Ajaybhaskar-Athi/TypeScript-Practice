"use strict";
class Vehicle {
    stop() {
        console.log("Vehicle stopped.");
    }
}
class Bike extends Vehicle {
    start() {
        console.log("Bike started.");
    }
}
const myBike = new Bike();
myBike.start();
myBike.stop();
