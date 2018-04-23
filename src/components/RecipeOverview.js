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
{				// TODO need to figure out how to handle the HTML for the description to add the image tags to it so I can have them be waypoints....
}        <pre className="Recipe-description">{data.description}</pre>
   		</div>
  	);
	}
}

export default RecipeOverview;
