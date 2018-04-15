import React, {Component} from "react";
import "../styles/Image.css";

import ImageBlock from "./ImageBlock";

class ImageContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: props.images,
		};
	   }

	render (){
		const data = this.state.images;
		console.log("logging data: " + data);
		const imageBlocks = data.map((data) =>
		<ImageBlock key={data.imageLink} data={data} />
	);

	return (

		<div className="Image-container">
		{imageBlocks}
		</div>
	);
}
}

export default ImageContainer;
