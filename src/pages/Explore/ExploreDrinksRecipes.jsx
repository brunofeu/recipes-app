import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import IngredientCard from '../../components/IngredientCard';
import RecipeContext from '../../context/RecipeContext';

function ExploreDrinksRecipes() {
  const { fetchDrink } = useContext(RecipeContext);
  const [ingredientsList, setIngredientsList] = useState();
  const [isLoading, setIsloading] = useState(true);

  const fetchIngredients = async () => {
    setIsloading(true);
    const INGREDIENTS_LIST_SIZE = 12;
    const ingredients = await fetchDrink('list', 'i', 'list');
    setIngredientsList(ingredients.slice(0, INGREDIENTS_LIST_SIZE));
    setIsloading(false);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {!isLoading && <IngredientCard list={ ingredientsList } url="thecocktaildb" /> }
    </div>
  );
}

export default ExploreDrinksRecipes;
