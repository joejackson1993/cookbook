import React, {Component} from "react";
import "../styles/Image.css";

class ImageBlock extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

	render (){
    const data = this.state.data;
    return (

      <div className="Image-block">
        <h3 className="ImageHeader">{data.imageTitle}</h3>
        <p className="imageDescription">{data.description}</p>
        <img src={data.imageLink} className="Image" alt={data.imageTitle} />
      </div>
      );
	}
}

export default ImageBlock;