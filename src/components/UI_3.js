import React from 'react';
import {Datservice} from '../OPP/Main'

const Cars = Datservice.cars
const listItems = Cars.map((item) =>
    <li>{item.model} -  {item.license} - {item.getModel}</li>
  );

const Error = Datservice.error
const ErrorItems = Error.map((item) =>
    <li>{item.model}</li>
  );

const UI_2 = ({ Data }) => {
    return (
        <div>
        <hr/>
            <ul>
                {listItems}
            </ul>
            <hr/>
            <ul>
                {Error.length !== 0 ? ErrorItems : "No Errors"}
            </ul>
        </div>
    )

} 

export default UI_2;