import React from 'react'

const NoMatch = ({location}) => {  

    return (
      <div>
        <h1>NO MATCH FOR : {location.pathname}</h1>
      </div>
    )

}

export default NoMatch;