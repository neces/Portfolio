import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Hons from './Pages/Hons';
import UX from './Pages/UX';

const Main = () => {
  
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/honoursproject' component={Hons} />
          <Route exact path='/ux' component={UX} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
  
  export default Main