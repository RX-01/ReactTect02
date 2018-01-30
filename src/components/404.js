import React from 'react'
import {Link} from 'react-router-dom'

const NoMatch = ({location}) => {  

    return (
      <div>
        <h1>NO MATCH FOR : {location.pathname}</h1>
        <button>
        <Link  to='/'>Back To Home Page</Link>
        </button>
      </div>
    )

}

export default NoMatch;