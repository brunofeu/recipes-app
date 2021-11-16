import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import IngredientCard from '../../components/IngredientCard';
import RecipeContext from '../../context/RecipeContext';
import Footer from '../../components/Footer';

function ExploreFoodsRecipes() {
  const { fetchMeal } = useContext(RecipeContext);
  const [ingredientsList, setIngredientsList] = useState();
  const [isLoading, setIsloading] = useState(true);

  const fetchIngredients = async () => {
    setIsloading(true);
    const INGREDIENTS_LIST_SIZE = 12;
    const ingredients = await fetchMeal('list', 'i', 'list');
    setIngredientsList(ingredients.slice(0, INGREDIENTS_LIST_SIZE));
    setIsloading(false);
  };

  useEffect(() => {
    fetchIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Header title="Explorar Ingredientes" />
        {!isLoading && <IngredientCard list={ ingredientsList } url="themealdb" /> }
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ExploreFoodsRecipes;
