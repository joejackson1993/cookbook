import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Cookbook from './Cookbook';
import Home from './Home';
import NewRecipe from './NewRecipe';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cookbook' component={Cookbook}/>
        <Route exact path='/new' component={NewRecipe}/>
      </Switch>
    );
  }
}

export default Main;
