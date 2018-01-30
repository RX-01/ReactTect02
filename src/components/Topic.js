import React from 'react';
import LinksList from '../OPP/LinkData'
import {Redirect} from 'react-router-dom'

  const Topic = ({ match, history }) => {

    const found = LinksList.find((element)=> element === match.params.topicId)
    let change = null;
    //   console.log(found);
      if (found == undefined) {
        history.push('/topics')
        // change = <Redirect to = '/'/>
        // alert('No Such Page')

      }

    return (
        <div>

        <h1>{match.params.topicId}</h1>
        <h3>{`this is from Topic / ${match.params.topicId}`}</h3>

        </div>
    )

} 

export default Topic;