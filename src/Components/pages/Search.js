import React, { Component } from "react";
import "./Search.css";
import axios from 'axios';
//  import"bootstrap/dist/css/bootstrap.css";

class Search extends Component {
  state = {
    searchValue: "",
    meals: [],
    recipe1: [],
    recipes: []
  };

  componentDidMount() {
    axios.get(`https://recibook.space/searchRecipe.php`,
      {
        withCredentials: true, headers:
        {
          'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',
        }
      }).then(res => {
        console.log('res.data', res.data);
        const meals = Object.keys(res.data).map(id => {
          const meal = res.data[id];
           return meal;
        });
        console.log(meals);
        this.setState({ meals });
        
      })
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    const recipe = {
      searchValue: this.state.searchValue,
      meals: this.state.meals
    };

    axios.post(`https://recibook.space/searchRecipe.php`, { recipe }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        //const recipe1 = res.data;
        this.setState({ recipe1: res.data });
      })

  };

  

  render() {
    console.log('last meal', this.state.meals[this.state.meals.length - 1]?.photo);
    return (
      <div id="main">
        <h1>Пошук документа</h1>
        <input
          name="text"
          type="text"
          placeholder="Введіть назву документа..."
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        
        {this.state.meals ? (
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
        ) : (
          <p>За цим запитом не знайдено докуметна</p>
        )}
      </div>
    );
  }
}

export default Search;
