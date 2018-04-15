import React, { Component } from 'react';
import './styles/App.css';

import Main from './components/Main';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />

        {/* TODO need to pull out the footer into its own component */}
        <footer className="App-footer">
          <p>Footer text</p>
        </footer>
      </div>
    );
  }
}

export default App;
