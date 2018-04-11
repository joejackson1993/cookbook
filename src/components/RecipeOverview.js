import React, {Component} from "react";
import "../styles/RecipeOverview.css";

class RecipeOverview extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

	render (){

    const data = this.state.data;

		return (
			<div className="Overview-box">
				<h3 className="Recipe-title">{data.title}</h3>
        <p className="Rating-box">{"Rating: " + data.rating}</p>
        <p className="Recipe-description">{data.description}</p>
   		</div>
  	);
	}
}

export default RecipeOverview;
