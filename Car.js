class Vehicle {
    constructor(make,model,year){

        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){return ("Beep");}

    toString(){return `The vehicle is ${this.make + this.model} from ${this.year}`};
}

class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constuctor(make,model,year){
        this.numWheels = 2;
        super(make,model,year);
    }

revEngine(){return "VROOM"};
}

class Garage {
    constuctor(capacity){

        this.capacity = capacity;
        this.vehicles = [];
    }

add(newVehicle){

    if (!(newVehicle instanceof Vechicle)){ return "Only vehicles are allowed in here!";}

    if(this.vechicles.length >= this.capacity){ return "Sorry we're full.";}

    this.vehicles.push(newVehicle);

    return "Vehicle added!";
}

}