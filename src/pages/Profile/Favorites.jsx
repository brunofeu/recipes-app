import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import shareIcon from '../../images/shareIcon.svg';


function Favorites() {
  const [message, setMessage] = useState(false);
  const [recipeFilter, setRecipesFilter] = useState();

  const { page } = useContext(RecipeContext);

  const favoriteRecipes = ['localStorage'];

  const handlecliclAll = () => {
    setRecipesFilter(favoriteRecipes);
  };

  const handleClickFood = () => {
    const filterFood = favoriteRecipes.filter((recipe) => (recipe));
    setRecipesFilter(filterFood);
  };

  const handleClickDrinks = () => {
    const filterDrinks = favoriteRecipes.filter((recipe) => (recipe));
    setRecipesFilter(filterDrinks);
  };

  useEffect(() => setRecipesFilter(favoriteRecipes), []);

  return (
    <div>
      <Header title="Receitas Favoritas" />
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
        <button
          onClick={ () => {
            navigator.clipboard.writeText('url'); // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
            setMessage(true);
          } }
          type="button"
        >
          <img
            src={ shareIcon }
            alt="compartilhar"
          />
        </button>
        {message ? <h5>Link copiado!</h5> : null }
      </div>
    </div>
  );
}

export default Favorites;
