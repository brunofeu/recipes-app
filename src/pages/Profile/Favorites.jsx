import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/FavoriteButton';
import ShareButton from '../../components/ShareButton';
import Header from '../../components/Header';

function Favorites() {
  const [recipeFilter, setRecipesFilter] = useState();
  const [render, setRender] = useState(false);

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

  const handlecliclAll = () => {
    setRecipesFilter(favoriteRecipes);
  };

  const handleClickFood = () => {
    const filterFood = favoriteRecipes.filter((recipe) => (recipe.type === 'comida'));
    setRecipesFilter(filterFood);
  };

  const handleClickDrinks = () => {
    const filterDrinks = favoriteRecipes.filter((recipe) => (recipe.type === 'bebida'));
    setRecipesFilter(filterDrinks);
  };

  const handleFavorite = (e) => {
    const removeFav = favoriteRecipes.filter((recipe) => (recipe.id !== e.target.id));
    setRecipesFilter(removeFav);
    localStorage.setItem('favoriteRecipes', JSON.stringify(removeFav));
    setRender(true);
  };
  // só irei atualizar novamente o estado com o favorite recipes caso o render seja alterado.
  // e o render só será alterado justamente caso eu altere meus favoritos
  useEffect(() => setRecipesFilter(favoriteRecipes), [render]);

  return (
    <section>
      <Header title="Receitas Favoritas" />
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
      <ShareButton
        //data-testid={ `${0}-horizontal-share-btn` }
      />
      <FavoriteButton
        onClick={ handleFavorite }
        // id={ rec.id }
        //data-testid={ `${0}-horizontal-favorite-btn` }
      />
      {/* {recipeFilter.map((rec) => (
        <div key={ rec.id }>
          <Link
            key={ rec.id }
            to={ `/${rec.type}s/${rec.id}` }
          >
            <img
              src={ rec.image }
              alt={ rec.name }
            />
          </Link>
          <div>
            <ShareButton />
            <FavoriteButton
              onClick={ handleFavorite }
              id={ rec.id }
            />
          </div>
          <Link
            key={ rec.id }
            to={ `/${rec.type}s/${rec.id}` }
          >
            <h2>{rec.name}</h2>
          </Link>
        </div>
      )) } */}
    </section>
  );
}

export default Favorites;
