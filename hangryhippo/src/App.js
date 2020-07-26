import React, { Component } from 'react';
import RecipeItem from './recipeItem/components/RecipeItem';
import './App.css';

class App extends Component {
  static defaultProps ={
    "id":48191,
    "title":"Apple Crumble Recipe",
    "image":"https://spoonacular.com/recipeImages/48191-312x231.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":4,
    "likes":965
   };
  render() {
    return (
      <RecipeItem {...this.props}/>
    );
  }
}

export default App;