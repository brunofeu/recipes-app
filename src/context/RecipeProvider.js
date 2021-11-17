import React, { useState } from 'react';
import propTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  // const [isLoading, setLoading] = useState(true);
  const [meal, setMeal] = useState([]);
  const [drink, setDrink] = useState([]);
  const [arrayInfo, setAI] = useState([]);
  const [page, setPage] = useState('');
  const [categories, setCategories] = useState({ meals: [], drinks: [] });

  // https://www.thecocktaildb.com/api/json/v1/1/{endpoint};

  const fetchMeal = async (method = 'search', option = 's', search = '') => {
    const mealURL = 'https://www.themealdb.com/api/json/v1/1/'
    + `${method}.php?${option}=${search}`;
    const mealRecipes = await fetch(mealURL).then((response) => response.json());
    const mealResponse = mealRecipes.meals;
    setMeal(mealResponse);
    return mealResponse;
  };

  const fetchDrink = async (method = 'search', option = 's', search = '') => {
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

  const alertTrigger = () => {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  };

  // useEffect(() => {}, []);

  const fetchCategories = async (type, key) => {
    const CATEGORY_URL = `https://www.the${type}db.com/api/json/v1/1/list.php?c=list`;
    const category = await fetch(CATEGORY_URL).then((response) => response.json());
    const categoriesResponse = category[key];
    setCategories({ ...categories, [key]: categoriesResponse });
  };

  const context = {
    alertTrigger,
    fetchRandom,
    fetchMeal,
    fetchDrink,
    setAI,
    setPage,
    fetchCategories,
    arrayInfo,
    meal,
    drink,
    page,
    categories,
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
