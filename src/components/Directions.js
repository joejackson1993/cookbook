import React, {Component} from "react";
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
  const listItems = data.map((data) =>
    	<li key={data.step.toString()}>
    	 	{data.step}
    	</li>
  	);
		return (
				<div className="Directions-box">
					<h3 className="Directions-header">{"Directions"}</h3>
					<ol className="Directions-list">{listItems}</ol>
				</div>
  		);
	}
}

export default Directions;
