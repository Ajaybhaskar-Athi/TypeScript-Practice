abstract class Vehicle {
    abstract start(): void; // Must be implemented in derived class

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
myBike.start(); //  Output: Bike started.
myBike.stop();  //  Output: Vehicle stopped.
// const myVehicle = new Vehicle(); //  Error: Cannot create an instance of an abstract class
