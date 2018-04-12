import React, { Component } from 'react';
import donut from "./images/donut.jpg"
import './styles/App.css';
import {images,overview,ingredients,directions} from "./tempData"

import Main from './components/Main.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO need to pull out the header and footers into their own components */}
        <header className="App-header">
          <img src={donut} className="App-logo" alt="logo" />
          <h1 className="App-title">Baking Title..</h1>
        </header>

        <Main />

        <footer className="App-footer">
          <p>Footer text</p>
        </footer>
      </div>
    );
  }
}

export default App;
