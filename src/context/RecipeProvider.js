import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  // const [isLoading, setLoading] = useState(true);
  const [meal, setMeal] = useState('');
  const [drink, setDrink] = useState('');
  const [page, setPage] = useState('');

  // https://www.thecocktaildb.com/api/json/v1/1/{endpoint};

  const fetchMeal = async (method = 'search', option = 'f', search = '') => {
    const mealURL = 'https://www.themealdb.com/api/json/v1/1/'
    + `${method}.php?${option}=${search}`;
    const mealRecipes = await fetch(mealURL).then((response) => response.json());
    const mealResponse = mealRecipes.meals;
    // console.log(mealResponse);
    setMeal(mealResponse);
    // console.log(meal);
  };

  const fetchDrink = async (method, option, search) => {
    const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/'
    + `${method}.php?${option}=${search}`;
    const drinkRecipes = await fetch(drinkURL).then((response) => response.json());
    const drinkResponse = drinkRecipes.drinks;
    setDrink(drinkResponse);
  };

  useEffect(() => {}, []);

  // useEffect(() => {
  //   fetchMeal('search', 's', 'Arrabiata');
  //   fetchDrink('search', 's', 'margarita');
  // }, []);

  const context = {
    fetchDrink,
    fetchMeal,
    setPage,
    meal,
    drink,
    page,
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
