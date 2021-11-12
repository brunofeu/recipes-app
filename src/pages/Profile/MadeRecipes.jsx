import React, { useState, useEffect, useContext } from 'react';
import FavoriteButton from '../../components/FavoriteButton';
import Header from '../../components/Header';
import ShareButton from '../../components/ShareButton';
import RecipeContext from '../../context/RecipeContext';
import shareIcon from '../../images/shareIcon.svg';

function MadeRecipes() {
  const [recipesFilter, setRecipesFilter] = useState([]);
  const [message, setMessage] = useState(false);

  const { Page } = useContext(RecipeContext);

  const madeRecipes = ['informação do localStorage'];

  const handlecliclAll = () => {
    setRecipesFilter(madeRecipes);
  };

  const handleClickFood = () => {
    const filterFood = madeRecipes.filter((recipe) => (recipe));
    setRecipesFilter(filterFood);
  };

  const handleClickDrinks = () => {
    const filterDrinks = madeRecipes.filter((recipe) => (recipe));
    setRecipesFilter(filterDrinks);
  };

  useEffect(() => setRecipesFilter(madeRecipes), []);

  return (
    <div>
      <Header title="Receitas Feitas" />
      <div>
        <button
          type="button"
          onClick={ handlecliclAll }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          onClick={ handleClickFood }
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          onClick={ handleClickDrinks }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
        <ShareButton />
        <FavoriteButton />
        {message ? <h5>Link copiado!</h5> : null }
      </div>
    </div>
  );
}

export default MadeRecipes;
