import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import CardReceita from '../../components/CardReceita';
import Categories from '../../components/Categories';

function Food() {
  const {
    meal, fetchMeal, setPage, fetchCategories, categories,
  } = useContext(RecipeContext);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setPage('comidas');
    fetchMeal();
    fetchCategories('meal', 'meals');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = ({ target: { name } }) => {
    if (selected === false) {
      fetchMeal('filter', 'c', name);
      setSelected(true);
    }
    if (selected === true) {
      fetchMeal();
      setSelected(false);
    }
  };

  return (
    <div>
      <Header title="Comidas" showSearchBtn="true" />
      <Categories
        categories={ categories.meals }
        onClick={ handleClick }
      />
      <CardReceita infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal'] } />
    </div>
  );
}

export default Food;
