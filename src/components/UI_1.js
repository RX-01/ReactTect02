import React from 'react';

import {class_1} from '../OPP/class_1'


// let test = new class_1(123,'shamlo')
class_1.fly()
class_1.nameSetter = 'Shalom'
const UI_1 = ({ username }) => {
    return (
        <div>

        <p>The logged in user is: {username}</p>
        <h1> Hey {class_1.nameGetter}</h1>

        </div>
    )

} 

export default UI_1;