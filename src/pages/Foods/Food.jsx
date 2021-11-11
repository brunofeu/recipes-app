import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import CardReceita from '../../components/CardReceita';
import Categories from '../../components/Categories';

function Food() {
  const {
    meal, fetchMeal, setPage, fetchCategories, categories,
  } = useContext(RecipeContext);

  useEffect(() => {
    setPage('comidas');
    fetchMeal();
    fetchCategories('meal', 'meals');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Comidas" showSearchBtn="true" />
      <Categories categories={ categories.meals } />
      <CardReceita infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal'] } />
    </div>
  );
}

export default Food;
