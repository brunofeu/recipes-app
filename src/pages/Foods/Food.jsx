import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import CardReceita from '../../components/CardReceita';

function Food() {
  const { meal, fetchMeal } = useContext(RecipeContext);

  const search = 'search';
  const s = 's';
  const a = '';

  useEffect(() => {
    fetchMeal(search, s, a);
    // const { setPage } = useContext(RecipeContext);
  });

  // useEffect(() => {
  //   setPage('comidas');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <Header title="Comidas" showSearchBtn="true" />
      <CardReceita infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal'] } />
    </div>
  );
}

export default Food;
