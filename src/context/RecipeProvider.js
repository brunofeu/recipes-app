import React, { useState } from 'react';
import propTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  // const [data, setData] = useState({});
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);

  // https://www.thecocktaildb.com/api/json/v1/1/{endpoint};

  const fetchMeal = async (method = 'search', option = 's', search = '') => {
    const mealURL = `https://themealdb.com/api/json/v1/1/${method}.php?${option}=${search}`;
    const mealResponse = await fetch(mealURL).then((response) => response.json());
    setFoodRecipes(mealResponse.meals);
  };

  const fetchDrink = async (method = 'search', option = 's', search = '') => {
    const drinkURL = 'https://thecocktaildb.com/api/json/v1/1/'
    + `${method}.php?${option}=${search}`;
    const drinkResponse = await fetch(drinkURL).then((response) => response.json());
    setDrinkRecipes(drinkResponse.drinks);
  };

  const context = {
    foodRecipes,
    drinkRecipes,
    fetchDrink,
    fetchMeal,
  };

  return (
    <RecipeContext.Provider value={ context }>
      { children }
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default RecipeProvider;
