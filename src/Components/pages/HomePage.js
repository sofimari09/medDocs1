import React, { Component } from "react";
import "./Search.css";
import axios from 'axios';
class HomePage extends Component {
  state = {
    searchValue: "",
    meals: [],
    recipe1: [],
    recipes: []
  };


  componentDidMount() {
    axios.get(`https://recibook.space/homePage.php`,
      {
        withCredentials: true, headers:
        {
          'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',
        }
      }).then(res => {
        console.log('res.data', res.data);
        const meals = Object.keys(res.data).map(id => {
          const meal = res.data[id];
          //meal.ingredients = JSON.parse(meal.ingredients);
          return meal;
        });
        console.log(meals);
        this.setState({ meals });
        
      })
  }

  render() {
    console.log('last meal', this.state.meals[this.state.meals.length - 1]?.photo);
    return (
      <div id="main">
        
          <div id="meals-container">
           {this.state.meals.filter(meal => {
      return meal.recipe_name.toLowerCase().includes(this.state.searchValue.toLowerCase());
    }).map((meal, index) => (
      <div class="single-meal" key={index}>
        <h2>{meal.strMeal || meal.recipe_name}</h2> 
         { <img src={meal.strMealThumb || meal.photo} alt="meal-thumbnail" /> }
      {meal.ingredients.map(ingredient => <div>{ingredient}</div>)}
      {meal.instruction}
         </div>
    ))}
          </div>
        
      </div>
    );
  }
}

export default HomePage ;