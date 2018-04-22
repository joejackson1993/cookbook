import React, {Component} from "react";
import Highlighter from 'react-highlighter';
import Waypoint from 'react-waypoint';

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

				let ingredientsRegex;
				if (Array.isArray(data.ingredients) && data.ingredients.length > 0){
					ingredientsRegex = new RegExp(data.ingredients.join('|'));
				} else {
					ingredientsRegex = 'noREXEXMATCH';
				}

				return(
					<li key={data.step.toString()}>
						<Waypoint bottomOffset="60%" topOffset="30%" onEnter={({ previousPosition, currentPosition, event }) => {
							console.log("waypoint is working!!!!");
						}} />
						<Highlighter search={ingredientsRegex}>{data.step}</Highlighter>
					</li>
				)
			});

		return (
			<div className="Directions-box" id="directions">
				<h3 className="Directions-header">{"Directions"}</h3>
				<ol className="Directions-list">{listItems}</ol>
			</div>
		);
	}
}

export default Directions;
