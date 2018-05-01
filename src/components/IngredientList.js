import React, {Component} from "react";
import math from 'mathjs';

import "../styles/IngredientList.css";

math.config({
	number: 'Fraction'   // Default type of number:
	// 'number' (default), 'BigNumber', or 'Fraction'
});

class IngredientList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
		};
	}

	oneHalf(data){
		data.map((data) => math.divide(math.fraction(data.ammount), 2));
	}

	render (){

		const data = this.state.data;
		const listItems = data.map((data) =>
		<li key={data.ingredient.toString()}>
			{(data.ammount.match('\\.')) ?
				(math.format(math.fraction(data.ammount)) + " " + data.measurement + " " + data.ingredient) :
				(data.ammount + " " + data.measurement + " " + data.ingredient)
			} {/* If the ammount contains a decimal (.) then we format it to a fraction. */}
		</li>
	);
	return (
		<div className="Ingredient-container">
			<div className="Ingredient-box">
				<h3 className="Ingredient-header">{"Ingredients"}</h3>
				<ul className="Ingredient-list">{listItems}</ul>
			</div>
		</div>
	);
}
}

export default IngredientList;
