import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import '../styles/Header.css';
import donut from "../images/donut.jpg";


class Header extends Component {
  render () {
    return (
      <header className="App-header">
        <img src={donut} className="App-logo" alt="logo" />
        <h1 className="App-title">Baking Title..</h1>

        <div className="Header-links">
          <Link className="Header-link" to={`/`}>{"Home"}</Link>
          <Link className="Header-link" to={`/cookbook`}>{"Cookbook"}</Link>
        </div>
      </header>
    )
  }
}

export default Header;
