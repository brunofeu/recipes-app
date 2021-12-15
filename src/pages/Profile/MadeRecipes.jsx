import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ShareButton from '../../components/ShareButton';

import '../../styles/MadeRecipes.css';

function MadeRecipes() {
  const [recipesFilter, setRecipesFilter] = useState([]);
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }
  const madeRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

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
      <div className="made-recipes-container">
        <div className="made-recipes-menu">
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
        </div>
        { recipesFilter !== null ? recipesFilter.map((recipe, index) => (
          <div className="cards-recipe-made" key={ recipe.id }>
            <Link
              key={ recipe.id }
              to={ `/recipes-app/${recipe.type}s/${recipe.id}` }
            >
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
                className="recipe-made-img"
              />
            </Link>
            <div className="recipe-made-text">
              <h4
                data-testid={ `${index}-horizontal-top-text` }
                className="horizontal-top-text"
              >
                {recipe.area
                  ? `${recipe.area} - ${recipe.category}` : `${recipe.alcoholicOrNot}`}
              </h4>
              <div className="recipe-made-link-share">
                <Link
                  key={ recipe.id }
                  to={ `/recipes-app/${recipe.type}s/${recipe.id}` }
                  className="horizontal-name"
                >
                  <h2 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h2>
                </Link>
                <ShareButton
                  clipBoard={ (`http://localhost:3000/${recipe.type}s/${recipe.id}`) }
                  testid={ `${index}-horizontal-share-btn` }
                />
              </div>
              <p
                data-testid={ `${index}-horizontal-done-date` }
                className="horizontal-done-date"
              >
                {recipe.doneDate}
              </p>
              {recipe.tags.length > 0
                ? recipe.tags.map((tag) => (
                  <span
                    className="tag-text"
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    { tag }
                  </span>))
                : null}
            </div>
          </div>
        )) : <p>Nenhuma receita finalizada!</p> }
      </div>
      <Footer />
    </div>
  );
}

export default MadeRecipes;
