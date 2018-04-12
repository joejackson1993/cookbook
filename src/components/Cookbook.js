import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Recipe from './Recipe';
import Recipes from './Recipes';

class Cookbook extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/cookbook' component={Recipes}/>
        <Route path='/cookbook/:number' component={Recipe}/>
      </Switch>
    );
  }
}

export default Cookbook;
