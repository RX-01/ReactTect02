import React from 'react';
import {Link} from 'react-router-dom'


  const Topics = () => {

    const Items = ['rendering','components','props-v-state']
    // add a guard for wrong routs 
    const LinkItems = Items.map((item, index) =>
        <li key = {index}>
                <Link to={{
                    pathname:`/topics/${item}`,
                }}>
                    {item}
                </Link>
        </li>
  );


    return (
    <div>
    <h2>Topics</h2>
    

      <ul>{LinkItems} </ul>
    </div>
    );

} 

export default Topics;