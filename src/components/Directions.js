import React, {Component} from "react";
import Highlighter from 'react-highlighter';

import "../styles/Directions.css";

class Directions extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

	render (){

	const data = this.state.data;
  const listItems = data.map(function(data){

		if(data.ingredients) {
			//TODO pull this into a helper method
			let ingredientsRegex;
			if (data.ingredients.length > 0){
				ingredientsRegex = new RegExp(data.ingredients.join('|'));
			}

			return(
			<li key={data.step.toString()}>
				<Highlighter search={ingredientsRegex}>{data.step}</Highlighter>
			</li>
			)
		} else {
			return(
			<li key={data.step.toString()}>
				{data.step}
			</li>
			)
		}
	});

		return (
				<div className="Directions-box">
					<h3 className="Directions-header">{"Directions"}</h3>
					<ol className="Directions-list">{listItems}</ol>
				</div>
  		);
	}
}

export default Directions;
