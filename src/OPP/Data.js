import {Vehicle} from '../OPP/class_2'
// import {Drone} from '../OPP/class_1'
import {DataError} from '../OPP/dataError'

export class Data {
    constructor(){
        this.cars = []
        this.drones = []
        this.error = []
    }
    loadData(fleet){
        fleet.map((data)=> {
            switch(data.type) {
                case 'car':
                    const car = this.loadVehicle(data)
                    this.cars.push(car)
                    break;
                case 'drone':
                    this.drones.push(data)
                    break;
                default:
                    const e = new DataError('There was an error',data)
                    this.error.push(e)
            }
        })
    }

    loadVehicle(item) {
        try {
            let i = new Vehicle(item.license,item.model,item.latLong);
            return i
        } catch (error) {
            const e = new DataError(error,item)
            this.error.push(e)
        }
        return null
    }

    validateCarData() {

    }
}

