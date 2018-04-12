import React, { Component } from 'react';
import '../styles/App.css';
import {images,overview,ingredients,directions} from "../tempData"

import IngredientList from "./IngredientList";
import RecipeOverview from './RecipeOverview';
import ImageContainer from './ImageContainer';
import Directions from './Directions';


class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeNumber: props.match.params.number,
    };
  }

  render() {

    //TODO use the recipeNumber to determine which data to pass into the components.

    return (
        <div className="Content-main">
         <IngredientList data={ingredients} />
         <div className="Content-center">
         <RecipeOverview data={overview} />
         <Directions data={directions} />
         </div>
         <ImageContainer images={images} />
        </div>
    );
  }
}

export default Recipe;
