import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  // const [isLoading, setLoading] = useState(true);
  const [meal, setMeal] = useState([]);
  const [drink, setDrink] = useState([]);
  const [page, setPage] = useState('');

  // https://www.thecocktaildb.com/api/json/v1/1/{endpoint};

  // const warningTo = () => {
  //   const mealArray = meal.length;
  //   const drinkArray = drink.length;
  //   const magicNumber = 0;

  //   if (page === 'comidas' && mealArray === magicNumber) {
  //     global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  //   } if (page === 'bebidas' && drinkArray === magicNumber) {
  //     global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  //   }
  // };

  const fetchMeal = async (method = 'search', option = 'f', search = '') => {
    const mealURL = 'https://www.themealdb.com/api/json/v1/1/'
    + `${method}.php?${option}=${search}`;
    const mealRecipes = await fetch(mealURL).then((response) => response.json());
    const mealResponse = mealRecipes.meals;
    setMeal(mealResponse);
    return mealResponse;
  };

  const fetchDrink = async (method, option, search) => {
    const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/'
    + `${method}.php?${option}=${search}`;
    const drinkRecipes = await fetch(drinkURL).then((response) => response.json());
    const drinkResponse = drinkRecipes.drinks;
    setDrink(drinkResponse);
    return drinkResponse;
  };

  const fetchRandom = async (url) => {
    const randomURL = `https://www.${url}.com/api/json/v1/1/random.php`;
    const randomRecipe = await fetch(randomURL).then((response) => response.json());
    return url === 'themealdb' ? randomRecipe.meals : randomRecipe.drinks;
  };

  useEffect(() => {}, []);

  const context = {
    fetchRandom,
    fetchMeal,
    fetchDrink,
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
