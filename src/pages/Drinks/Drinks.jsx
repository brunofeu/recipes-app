import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import CardReceita from '../../components/CardReceita';
import Categories from '../../components/Categories';

function Drinks() {
  const {
    drink, fetchDrink, setPage, fetchCategories, categories,
  } = useContext(RecipeContext);

  useEffect(() => {
    setPage('bebidas');
    fetchDrink();
    fetchCategories('cocktail', 'drinks');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async ({ target: { name } }) => {
    fetchDrink('filter', 'c', name);
  };

  return (
    <div>
      <Header title="Bebidas" showSearchBtn="true" />
      <Categories categories={ categories.drinks } onClick={ handleClick } />
      <CardReceita infos={ [drink, 'idDrink', 'strDrinkThumb', 'strDrink'] } />
    </div>
  );
}

export default Drinks;
