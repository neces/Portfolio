import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Hons from './Pages/Hons'
import UX from './Pages/UX'
import './index.css';

const Main = () => {
  
    return (
      <Switch>
        <Route exact path='/honoursproject' component={Hons} />
        <Route exact path='/ux' component={UX} />
        <Route exact path='/' component={Home} />
      </Switch>
    )
  }
  
  export default Main