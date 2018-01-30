import React, { Component } from 'react';
import UI1 from './components/UI_1'
import UI2 from './components/UI_2'
import Topics from './components/Topics'
import Topic from './components/Topic'
import Nested from './components/Nested'
import NoMatch from './components/404'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'





class App extends Component {
  render() {
    return (

    
      <Router>
        <div className="App">
        <ul>
          <li><Link  to='/'>UI_1</Link></li>
          <li><Link to='/about'>UI_2</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/nested'>Nested</Link></li>
      </ul>

      <Switch>
        <Route  exact path='/' render={(props) => <UI1  {...props} username= 'Props Passed'/>}/>
        <Route path='/about' component={UI2} />
        <Route path='/nested' component={Nested} />
        <Route exact path='/topics' component={Topics} />
        <Route path='/topics/:topicId' component={Topic}/>
        <Route component={NoMatch} />
      </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
