import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import Footer from '../../components/Footer';
import RecipeCard from '../../components/RecipeCard';
import Categories from '../../components/Categories';
import FiltersNotFound from '../../components/FiltersNotFound';

import '../../styles/Menu.css';

const selectedFilterClass = 'recipe-filter-selected';

function Food() {
  const {
    meal, fetchMeal, setPage, fetchCategories, categories, filter, setFilter,
  } = useContext(RecipeContext);
  const [selected, setSelected] = useState({ name: '', state: false });

  useEffect(() => {
    setPage('comidas');
    if (filter === '') {
      fetchMeal();
    } else {
      fetchMeal('filter', 'i', filter);
      setFilter('');
    }
    fetchCategories('meal', 'meals');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = ({ target }) => {
    const { name } = target;
    if (selected.state === false || (selected.state === true && selected.name !== name)) {
      fetchMeal('filter', 'c', name);
      setSelected({ name, state: true });
      [...target.parentNode.children].forEach(
        (item) => item.classList.remove(selectedFilterClass),
      );
      target.classList.toggle(selectedFilterClass);
    }
    if (selected.state === true && selected.name === name) {
      [...target.parentNode.children].forEach(
        (item) => item.classList.remove(selectedFilterClass),
      );
      target.parentNode.children.All.classList.toggle(selectedFilterClass);
      fetchMeal();
      setSelected({ name: '', state: false });
    }
  };
  return (
    <div>
      <Header title="Comidas" showSearchBtn />
      <Categories
        categories={ categories.meals }
        onClick={ handleClick }
        onAll={ fetchMeal }
      />
      { (meal !== null)
        ? <RecipeCard infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal', 'comidas'] } />
        : <FiltersNotFound /> }
      <Footer />
    </div>
  );
}

export default Food;
