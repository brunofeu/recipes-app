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

  const handleClick = async ({ target: { name } }) => {
    fetchMeal('filter', 'c', name);
  };

  return (
    <div>
      <Header title="Comidas" showSearchBtn="true" />
      <Categories categories={ categories.meals } onClick={ handleClick } />
      <CardReceita infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal'] } />
    </div>
  );
}

export default Food;
