import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Recipes.css'

import NewLink from '../images/new-recipe-link.png';
import {links} from '../tempData';


class Recipes extends Component {

  render() {
    const listItems = links.map((link) =>
        <Link key={link.recipeNumber} className="Recipe-link" to={`/cookbook/${link.recipeNumber}`}>
          {link.recipeTitle}
          <img className="Recipe-image" src={link.imageLink} alt={link.recipeTitle}></img>
        </Link>
    );

    return (
        <div className="Recipies-main">
          <ul className="Recipie-list">
            <Link key={"new"} className="Recipe-link" to={`/new`}>
              {"New Recipe"}
              <img className="Recipe-image" src={NewLink} alt={"New Recipe"}></img>
            </Link>
            {listItems}
          </ul>

        </div>
    );
  }
}

export default Recipes;
