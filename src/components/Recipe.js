import React, { Component } from 'react';
import '../styles/App.css';
import {donutRecipe,onionPieRecipe} from "../tempData"

import IngredientList from "./IngredientList";
import RecipeOverview from './RecipeOverview';
import ImageContainer from './ImageContainer';
import Directions from './Directions';

let ingredients,overview,directions,images;

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeNumber: props.match.params.number,
    };
  }

  render() {

    if (this.state.recipeNumber === "1"){
      ingredients = donutRecipe.ingredients;
      overview = donutRecipe.overview;
      directions = donutRecipe.directions;
      images = donutRecipe.images;
    } else if (this.state.recipeNumber === "2"){
      ingredients = onionPieRecipe.ingredients;
      overview = onionPieRecipe.overview;
      directions = onionPieRecipe.directions;
      images = onionPieRecipe.images;
    }

    return (
        <div className="Content-main">
         <IngredientList data={ingredients} />
         <div className="Content-center">
         <RecipeOverview data={overview} />
         <Directions data={directions} />
         </div>
         <ImageContainer images={images} />
         <div className='fadeout'></div>
        </div>
    );
  }
}

export default Recipe;
