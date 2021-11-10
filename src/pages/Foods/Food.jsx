import React, { useEffect, useContext } from 'react';
import CardReceita from '../../components/CardReceita';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';

function Food() {
  const { foodRecipes, fetchMeal } = useContext(RecipeContext);

  const search = 'search';
  const s = 's';
  const a = '';

  useEffect(() => {
    fetchMeal(search, s, a);
  }, []);

  return (
    <div>
      <Header title="Comidas" showSearchBtn="true" />
      <CardReceita infos={ [foodRecipes, 'idMeal', 'strMealThumb', 'strMeal'] } />
    </div>
  );
}

export default Food;
