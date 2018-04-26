import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../styles/NewRecipe.css';

import NewRecipeIngredients from './NewRecipeIngredients';
import NewRecipeImage from './NewRecipeImage';

import {TINYMCE_API_KEY} from '../constants';

class NewRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overview: '',
      title: '',
      ingredients: '',
      directions: '',
     };

    this.handleOverviewEditorChange = this.handleOverviewEditorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDirectionEditorChange = this.handleDirectionEditorChange.bind(this);
  }

  handleSubmit(event) {
    alert('Recipe Submitted ' + this.state.title);
    event.preventDefault();
    console.log("state", this.state);
  }

  handleOverviewEditorChange(overview){
    this.setState({overview});
  }

  handleDirectionEditorChange(directions){
    this.setState({directions});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value });
  }


  render() {
    return (
      <div className="New-recipe-container">

        <NewRecipeIngredients />

        <div className="New-recipe-center">
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input value={this.state.title} onChange={this.handleTitleChange} />
            </label>
            <label>
              Overview:
              <Editor
                init={{
                  menu: {
                    edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
                    insert: {title: 'Insert', items: 'link media'},
                    format: {title: 'Format', items: 'bold italic underline | removeformat'},
                  },
                }
                }
                name="description"
                initialValue="<p>hello editor</p>"
                apiKey={TINYMCE_API_KEY}
                value={this.state.overview}
                onEditorChange={this.handleOverviewEditorChange}
                />
            </label>

            <label>
              Directions:
              <Editor
                plugins='lists'
                init={{
                  menu: {
                    edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
                    insert: {title: 'Insert', items: 'link media'},
                    format: {title: 'Format', items: 'bold italic underline superscript | removeformat'},
                  },
                }
                }
                name="directions"
                initialValue="<p>hello Directions editor</p>"
                apiKey={TINYMCE_API_KEY}
                value={this.state.directions}
                onEditorChange={this.handleDirectionEditorChange}
                />
            </label>


            <input type="submit" value="Submit" />
          </form>
        </div>

        <NewRecipeImage/>
      </div>
    )
  }
}

export default NewRecipe;
