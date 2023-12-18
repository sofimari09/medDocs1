import React, { Component } from 'react';
import RecipeInput from './RecipeInput';
import './NewRecipe.css';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
      ],
      nextRecipeId: 3,
      
    }
    
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  
  
  
  render() {
    return (
      <div className="newRecipe">
        
            <RecipeInput 
              onSave={this.handleSave}
              
            /> 
             </div>
    );
  }
}

export default AddRecipe;
