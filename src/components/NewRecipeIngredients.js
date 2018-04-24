import React, {Component} from 'react';
import NewIngredientItems from './NewIngredientItems';

//TODO need to do it more like this.
//https://codepen.io/philmayfield/pen/MwRgyN


class NewRecipeIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO fix this to make better keys....
      key: 1,
      newIngredient: '',
      ingredients: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  handleChange(event){
    this.setState({newIngredient: event.target.value });
  }

  addIngredient(event){
    event.preventDefault();

    if (this.state.newIngredient !== ''){

      console.log("adding ingredient " + this.state.newIngredient);
      let newIngredientsArray = this.state.ingredients.concat({ingredient: this.state.newIngredient, key:this.state.key });

      //dont think that I need this.. idk
      // this.setState(prevState => ({
      //     ingredients: [...prevState.ingredients, newIngredientsArray],
      // }));

      this.setState({ingredients: newIngredientsArray});
      this.setState({newIngredient: ''});
      this.setState({key: (this.state.key + 1)})
      console.log(this.state.ingredients);
    } else {
      alert("You need to enter some text to add the ingredient");
    }
  }


  render () {
    return (
      <div>
        <form onSubmit={this.addIngredient}>
          <label>
            Ingredients:
            <input value={this.state.newIngredient} onChange={this.handleChange} />
          </label>
          <button type='submit' value="Submit">Add</button>
        </form>
        <NewIngredientItems ingredients={this.state.ingredients}></NewIngredientItems>
      </div>
    )
  }
}

export default NewRecipeIngredients;
