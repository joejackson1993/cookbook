import React, { Component } from 'react';

var styles = {
	color:'black',
	display:'flex',
  flexBasis:'100%',
  justifyContent:'center'
};

class Home extends Component {
  render() {
    return (
      <div style={styles}>
      <h1 >Welcome to a better cookbook!</h1>
      </div>
    );
  }
}

export default Home;
