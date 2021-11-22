import React, { useEffect, useContext, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeContext from '../../context/RecipeContext';
import RecipeCard from '../../components/RecipeCard';
import Categories from '../../components/Categories';
import FiltersNotFound from '../../components/FiltersNotFound';

import '../../styles/Menu.css';
import '../../App.css';

function Drinks() {
  const {
    drink, fetchDrink, setPage, fetchCategories, categories, filter, setFilter,
  } = useContext(RecipeContext);
  const [selected, setSelected] = useState({ name: '', state: false });

  useEffect(() => {
    setPage('bebidas');
    if (filter === '') {
      fetchDrink();
    } else {
      fetchDrink('filter', 'i', filter);
      setFilter('');
    }
    console.log(filter);
    fetchCategories('cocktail', 'drinks');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async ({ target: { name } }) => {
    if (selected.state === false || (selected.state === true && selected.name !== name)) {
      fetchDrink('filter', 'c', name);
      setSelected({ name, state: true });
    }
    if (selected.state === true && selected.name === name) {
      fetchDrink();
      setSelected({ name: '', state: false });
    }
  };

  return (
    <div>
      <Header title="Bebidas" showSearchBtn="true" />
      <Categories
        categories={ categories.drinks }
        onClick={ handleClick }
        onAll={ fetchDrink }
      />
      { (drink !== null)
        ? (
          <RecipeCard
            infos={ [drink, 'idDrink', 'strDrinkThumb', 'strDrink', 'bebidas'] }
          />
        )
        : <FiltersNotFound /> }
      <Footer />
    </div>
  );
}

export default Drinks;
