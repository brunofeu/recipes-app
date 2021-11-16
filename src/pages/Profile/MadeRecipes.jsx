import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ShareButton from '../../components/ShareButton';

function MadeRecipes() {
  const [recipesFilter, setRecipesFilter] = useState([]);

  const madeRecipes = JSON.parse(localStorage.getItem('madeRecipes'));

  const handlecliclAll = () => {
    setRecipesFilter(madeRecipes);
  };

  const handleClickFood = () => {
    const filterFood = madeRecipes.filter((recipe) => (recipe.type === 'comida'));
    setRecipesFilter(filterFood);
  };

  const handleClickDrinks = () => {
    const filterDrinks = madeRecipes.filter((recipe) => (recipe.type === 'bebida'));
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
        { recipesFilter.map((recipe) => (
          <div key={ recipe.id }>
            <Link
              key={ recipe.id }
              to={ `/${recipe.type}s/${recipe.id}` }
            >
              <img
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>
            <ShareButton />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MadeRecipes;
