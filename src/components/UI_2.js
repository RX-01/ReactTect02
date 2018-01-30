import React from 'react';
import {Bike} from '../OPP/class_2'

const bike1 = new Bike(343) 
bike1.start()
// bike1.getName() not available

const UI_2 = ({ Data }) => {
    return (
        <div>
        <hr/>
        <h1> Bike is: </h1>
        <p>Bike Info: </p>
        </div>
    )

} 

export default UI_2;