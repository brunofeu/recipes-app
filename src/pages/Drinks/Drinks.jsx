import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import CardReceita from '../../components/CardReceita';

function Drinks() {
  const { drinkRecipes, fetchDrink } = useContext(RecipeContext);

  const search = 'search';
  const s = 's';
  const a = '';

  useEffect(() => {
    fetchDrink(search, s, a);
  }, []);

  return (
    <div>
      <Header title="Bebidas" showSearchBtn="true" />
      <CardReceita infos={ [drinkRecipes, 'idDrink', 'strDrinkThumb', 'strDrink'] } />
    </div>
  );
}

export default Drinks;
