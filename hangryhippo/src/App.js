import React, { Component } from 'react';
import './App.css';
import Header from './header/components/Header';
import IngredientsList from './ingredientsList/components/IngredientsList';
import RecipeItemList from './recipeItemList/components/RecipeItemList';
import Recipe from './recipe/components/Recipe';

const recipeSpec = {
    id: 641803,
    title: "Easy & Delish! ~ Apple Crumble",
    image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    usedIngredientCount: 3,
    missedIngredientCount: 4,
    likes: 1
  };

export const recipeInstructions = {
  "instructions": "<ol><li>Preheat Oven 350 degrees:</li><li>Combine sliced apples, lemon zest, dash of ground cloves and sugar in a bowl and toss. Place in a deep dish buttered baking dish.</li><li>In a smaller bowl combine the flour, sugar, brown sugar and butter. Mix this together with your fingers until it becomes crumbly. Place this mixture on top of the apples.</li><li>Bake about 40-45 minutes, until the topping gets a little golden color.</li></ol>",
};

class App extends Component {
  state = {
    ingredients: [],
    nextIngredient: '',
    canSearch: false,
    isShowingRecipe: false,
    instructions: '',
  };

  addIngredient = () => {
    if(this.state.nextIngredient.length === 0) return;

    this.setState({
      ingredients: this.state.ingredients.concat(this.state.nextIngredient),
      nextIngredient: '',
      canSearch: true,
    });
  };

  removeIngredient = indexToRemove => {
    const newIngredients = this.state.ingredients.concat([]);
    newIngredients.splice(indexToRemove, 1);
    const newCanSearch = newIngredients.length !== 0;

    this.setState({
      ingredients: newIngredients,
      canSearch: newCanSearch,
    });
  };

  handleAddNextChange = newAddNextIngredient => {
    this.setState({
      nextIngredient: newAddNextIngredient,
    });
  };

  doSearch = () => {
    this.setState({
      canSearch: false,
    });

    return new Promise((resolve, reject) => {
      const newRecipeListLength = Math.floor((Math.random() * 5) + 1);
      const newRecipeList = new Array(newRecipeListLength);
      newRecipeList.fill(recipeSpec);
      setTimeout(resolve, 2000, newRecipeList);
    }).then(newRecipes => {
      this.setState({
        recipes: newRecipes,
        canSearch: true,
      })
    });
  };

  showRecipe = id => {
    this.setState({
      canSearch: false,
      isShowingRecipe: true,
    });

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, recipeInstructions.instructions);
    }).then(instructions => {
      this.setState({
        instructions,
      });
    });
  };

  hideRecipe = () => {
    this.setState({
      canSearch: this.state.ingredients.length !== 0,
      isShowingRecipe: false,
      instructions: '',
    });
  };
      

  render() {
    return (
      <div className="App container-fluid">
        <div className="row container-fluid">
          <div className="panel panel-default header hangry-panel">
            <div className="panel-body">
              <Header />
            </div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col-lg-4 ingredients-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                <IngredientsList 
                  ingredients={this.state.ingredients}
                  nextIngredient={this.state.nextIngredient}
                  addIngredient={this.addIngredient}
                  removeIngredient={this.removeIngredient}
                  handleAddNextChange={this.handleAddNextChange}
                  canSearch={this.state.canSearch}
                  doSearch={this.doSearch}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 recipes-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                {
                  this.state.isShowingRecipe
                    ? <Recipe instructions={this.state.instructions} hideRecipe={this.hideRecipe} />
                    : <RecipeItemList items={this.state.recipes} showRecipe={this.showRecipe} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
