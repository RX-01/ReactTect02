import React from 'react';



  const Topic = ({ match }) => {
    return (
        <div>
        <h1>{match.params.topicId}</h1>
        <h3>{`this is from Topic / ${match.params.topicId}`}</h3>

        </div>
    )

} 

export default Topic;