import React, {Component} from "react";
import "../styles/IngredientList.css";

class IngredientList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

	render (){

	const data = this.state.data;
  	const listItems = data.map((data) =>
    	<li key={data.ingredient.toString()}>
    	 	{data.ammount + " " + data.measurement + " " + data.ingredient}
    	</li>
  	);
		return (
				<div className="Ingredient-box">
					<h3 className="Ingredient-header">{"Ingredients"}</h3>
					<ul className="Ingredient-list">{listItems}</ul>
				</div>
  		);
	}
}

export default IngredientList;
