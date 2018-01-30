export class Vehicle {
    constructor(license,model,latLong) {
        console.log('constructing vehicle')
        this.license = license
        this.model = model
        this.latLong = latLong
        this.gps = true;
   
    }
    start() {
        console.log(`Strating ${this.model}`)
    }

    static getName(){
        console.log('Name')
    } // can only be acsses via derived classes not instances of class

    get getModel(){
        return `The Name of the model is${this.model}`
    }
}

export class Bike extends Vehicle {
    constructor(lNum) {
        // must call vehicles constructor first via super() 
        //even if there is not explist constoctor in vehicle
        // super() must be called first in a derived class
        super(lNum); 
        console.log('constructing Bike')
        console.log(this.lNum)
        this.gps = false;
        console.log(this.gps)
    }
    start() {
        super.start() // call the start method in the pearent class
        console.log('Strating Bike')
    }

    get getModel(){
        return `The Name of the model is${this.model}`
    }

}

// class Car extends Vehicle {

// }

