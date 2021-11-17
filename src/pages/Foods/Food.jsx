import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import CardReceita from '../../components/CardReceita';
import Categories from '../../components/Categories';

function Food() {
  const {
    meal, fetchMeal, setPage, fetchCategories, categories, /* alertTrigger, */
  } = useContext(RecipeContext);
  const [selected, setSelected] = useState({ name: '', state: false });

  useEffect(() => {
    setPage('comidas');
    fetchMeal();
    fetchCategories('meal', 'meals');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = ({ target: { name } }) => {
    if (selected.state === false || (selected.state === true && selected.name !== name)) {
      fetchMeal('filter', 'c', name);
      setSelected({ name, state: true });
    }
    if (selected.state === true && selected.name === name) {
      fetchMeal();
      setSelected({ name: '', state: false });
    }
  };

  return (
    <div>
      <Header title="Comidas" showSearchBtn="true" />
      <Categories
        categories={ categories.meals }
        onClick={ handleClick }
        onAll={ fetchMeal }
      />
      { (meal !== null)
        ? <CardReceita infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal', 'comidas'] } />
        : console.log('??') }
    </div>
  );
}

export default Food;
