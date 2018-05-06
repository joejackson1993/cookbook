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
			ingredientFraction: 1,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    this.setState({ingredientFraction: event.target.value});
  }

	render (){

		let factoredData = this.refactorAmmounts(this.state.data, this.state.ingredientFraction);
		let formattedData = this.formatAmmount(factoredData);

		const listItems = formattedData.map((data) =>
		<li key={data.ingredient.toString()}>
			{data.ammount + " " + data.measurement + " " + data.ingredient}
		</li>
	);
	return (
		<div className="Ingredient-container">
			<div className="Ingredient-box">
				<h3 className="Ingredient-header">{"Ingredients"}</h3>
					<select className="Ammount-Selector" value={this.state.ingredientFraction} onChange={this.handleChange}>
						<option value={.5}>1/2</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={4}>4</option>
					</select>
				<ul className="Ingredient-list">{listItems}</ul>
			</div>
		</div>
	);
}


//TODO need to pull out these two helper methods and possibly edit the data at a higher point.. idk

refactorAmmounts(data, number){

	let factoredData = JSON.parse(JSON.stringify(data));
	return factoredData.map(function(data){

		data.ammount = math.multiply(data.ammount, number).toString();
		return data;
	});
}

formatAmmount(data){

	let formattedData = JSON.parse(JSON.stringify(data));

	for (var i=0; i < formattedData.length; i++){
		let formattedAmmount = '';
		let splitDecimal = formattedData[i].ammount.split('.');

		if(splitDecimal[1]){
			let fractionPortion = math.format(math.fraction(  ("." + splitDecimal[1])  ))

			if (splitDecimal[0] !== '0'){
				formattedAmmount = splitDecimal[0].concat(" ", fractionPortion);
			}	else {
				formattedAmmount = fractionPortion;
			}
			formattedData[i].ammount = formattedAmmount;
		}
	}
	return formattedData;
}

}

export default IngredientList;
