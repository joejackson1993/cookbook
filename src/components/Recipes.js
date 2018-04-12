import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Recipes extends Component {
  render() {
    return (
      <div>
          <ul>
            <li key={1}>
              <Link to={`/cookbook/${1}`}>{"Donuts"}</Link>
            </li>
            <li key={2}>
              <Link to={`/cookbook/${2}`}>{"Cookies"}</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default Recipes;
