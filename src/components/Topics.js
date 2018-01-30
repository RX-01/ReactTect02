import React from 'react';
import {Link} from 'react-router-dom'
import LinksList from '../OPP/LinkData'

  const Topics = () => {

    // const Links = ['rendering','components','props-v-state']
    // add a guard for wrong routs 
    const LinkItems = LinksList.map((item, index) =>
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