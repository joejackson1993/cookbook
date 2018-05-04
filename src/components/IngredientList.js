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

	//TODO need to pull out these two helper methods and possibly edit the data at a higher point.. idk

	refactorAmmounts(data, number){
		return data.map((data) => {data.ammount = math.multiply(data.ammount, number).toString(); return data} );
	}

	formatAmmount(data){
		for (var i=0; i < data.length; i++){
			console.log(i);
			let formattedAmmount = '';
			let splitDecimal = data[i].ammount.split('.');

			if(splitDecimal[1]){
				let fractionPortion = math.format(math.fraction(  ("." + splitDecimal[1])  ))

				if (splitDecimal[0] !== '0'){
					formattedAmmount = splitDecimal[0].concat(" ", fractionPortion);
				}	else {
					formattedAmmount = fractionPortion;
				}
				data[i].ammount = formattedAmmount;
			}
		}
	}

	render (){

		const data = this.state.data;
		let newData = this.refactorAmmounts(data, 1)
		this.formatAmmount(newData);

		console.log(newData);
		const listItems = newData.map((data) =>
		<li key={data.ingredient.toString()}>
				{data.ammount + " " + data.measurement + " " + data.ingredient}
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
