import React, {Component} from 'react';

class NewIngredientItems extends Component {

  render () {
    const listItems = this.props.ingredients.map((data) =>
      <li key={data.key}>
        {data.ingredient}
      </li>
    );

    return (
      <ul>{listItems}</ul>
    )
  }
}

export default NewIngredientItems;
