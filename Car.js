// Understand how to make classes

class Vehicle {
    // make first class of vehicle, including instance properties
    constructor(make,model,year){

        this.make = make;
        this.model = model;
        this.year = year;
    }
    // class method
    honk(){return "Beep";

    }
    // class method
    toString(){return `The vehicle is ${this.make} ${this.model} from ${this.year}`};
}
// car class extends the vehicle class, child of vehicle class
class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}
// motorcycle class extends the vehicle class, child of vehicle class
class Motorcycle extends Vehicle{
    constructor(make,model,year){
        // super has to go above to be effective to access this.numWheels
        super(make,model,year); 
        this.numWheels = 2;
        
    }
// class method
revEngine(){
    
    return "VROOM";
}
}
// new class
class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
// function to add or reject vehicles above to garage
add(newVehicle){

    if (!(newVehicle instanceof Vehicle)){ return "Only vehicles are allowed in here!";}

    if(this.vehicles.length >= this.capacity){ return "Sorry we're full.";}

    this.vehicles.push(newVehicle);

    return "Vehicle added!";
}

}