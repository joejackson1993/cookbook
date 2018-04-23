import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';

import {TINYMCE_API_KEY} from '../constants';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      title: ''
     };

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Recipe Submitted ' + this.state.title);
    event.preventDefault();
    console.log("state", this.state);
  }

  handleEditorChange(content) {
    this.setState({ content });
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value });
  }


  render() {
    return (
      <div className="New-recipe-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label>
            Overview:
            <Editor apiKey={TINYMCE_API_KEY} value={this.state.content} onEditorChange={this.handleEditorChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewRecipe;
