import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header';
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

export default MadeRecipes;
