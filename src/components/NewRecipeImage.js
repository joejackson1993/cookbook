import React, {Component} from 'react';
import '../styles/NewRecipeImage.css';

//TODO make it more like this
// https://css-tricks.com/image-upload-manipulation-react/
// also.. make it so the order of the images can be moved around and that is saved so it shows like that in the Recipe


class NewRecipeImage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
      e.preventDefault();
      console.log(this.state.file);
      // TODO: do something with -> this.state.file
    }

    _handleImageChange(e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }

      reader.readAsDataURL(file)
    }

    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img alt="" src={imagePreviewUrl} />);
      }

      return (
        <div className="New-recipe-image-container">
          <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this._handleImageChange} />
            <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
          </form>
          {$imagePreview}
        </div>
      )
    }
}

export default NewRecipeImage;
