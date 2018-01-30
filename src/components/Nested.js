import React from 'react';
import {Route,Link,withRouter} from 'react-router-dom'
import Topic from './Topic'

  const Nested = ({ match }) => {
    return (
        <div>
        <h2>Nested</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
    
        <Route path={`${match.url}/rendering`} component={Topic} />
        <Route path={`${match.url}/components`} component={Topic} />
        <Route path={`${match.url}/props-v-state`} component={Topic} />
      </div>
    )

} 

export default withRouter(Nested);