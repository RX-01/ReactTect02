export class Drone {
    constructor(id,name){
        console.log(`Id is: ${id}`)
        this.id = id;
        this.name = name
    }

    fly() {
        console.log(`Drone: ${this.name} is flying`)
    }

    // static Method can acsees static properties
    static Height(){
        // console.log(`Id is: ${this.id}`) will not work cannont be accsesd
        console.log(`Id is: ${this.maxHeight}`)
    }

    get nameGetter(){
        return this.name
    }

    set nameSetter(name){
        this.name = name.toUpperCase();
    }
}

// static properties not available on the instance
Drone.maxHeight = 2000;
Drone.Height() //cannont acces non static propertries

export const class_1 = new Drone(123,'Tanya');
  