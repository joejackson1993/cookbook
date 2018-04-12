import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Cookbook from './Cookbook';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cookbook' component={Cookbook}/>
      </Switch>
    );
  }
}

export default Main;
