import React from 'react';
import propTypes from 'prop-types';
import RecipeContext from './RecipeContext';

function RecipeProvider({ children }) {
  // const [data, setData] = useState({});

  // https://www.thecocktaildb.com/api/json/v1/1/{endpoint};

  const fetchMeal = async (method, option, search) => {
    const mealURL = `https://themealdb.com/api/json/v1/1/${method}.php?${option}=${search}`;
    const mealRecipes = await fetch(mealURL).then((response) => response.json());
    return mealRecipes.meals;
  };

  const fetchDrink = async (method, option, search) => {
    const drinkURL = `https://thecocktaildb.com/api/json/v1/1/${method}.php?${option}=${search}`;
    const drinkRecipes = await fetch(drinkURL).then((response) => response.json());
    return drinkRecipes.drinks;
  };

  // useEffect(() => {
  //   fetchMeal('search', 's', 'Arrabiata');
  //   fetchDrink('search', 's', 'margarita');
  // }, []);

  const context = {
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
