import React, { Component } from 'react';
import donut from "./images/donut.jpg"
import './styles/App.css';
import {images,overview,ingredients,directions} from "./tempData"

import IngredientList from "./components/IngredientList";
import RecipeOverview from './components/RecipeOverview';
import ImageContainer from './components/ImageContainer';
import Directions from './components/Directions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={donut} className="App-logo" alt="logo" />
          <h1 className="App-title">Baking Title..</h1>
        </header>

          <div className="Content-main">
           <IngredientList data={ingredients} />
           <div className="Content-center">
           <RecipeOverview data={overview} />
           <Directions data={directions} />
           </div>
           <ImageContainer images={images} />
          </div>
        <footer className="App-footer">
          <p>Footer text</p>
        </footer>
      </div>
    );
  }
}

export default App;
