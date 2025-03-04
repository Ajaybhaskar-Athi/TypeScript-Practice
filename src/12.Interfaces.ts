interface Drivable {
    speed: number;
    drive(): void;
}

class Car implements Drivable {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    drive() {
        console.log(`Driving at ${this.speed} km/h`);
    }
}

const myCar = new Car(120);
myCar.drive(); // Output: Driving at 120 km/h
