import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Recipes.css'

import {links} from '../tempData';


class Recipes extends Component {

  render() {
    const listItems = links.map((link) =>
      <li className="Recipe-box" key={link.recipeNumber}>
        <Link className="Recipe-link" to={`/cookbook/${link.recipeNumber}`}>{link.recipeTitle}</Link>
        <img className="Recipe-image" src={link.imageLink}></img>
      </li>
    );

    return (
        <div className="Recipies-main">
          <ul className="Recipie-list">{listItems}</ul>
        </div>
    );
  }
}

export default Recipes;
