import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShareButton from '../../components/ShareButton';
import Header from '../../components/Header';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

import '../../styles/Favorites.css';
import '../../App.css';
import Footer from '../../components/Footer';

function Favorites() {
  const [recipeFilter, setRecipesFilter] = useState([]);
  const [render, setRender] = useState(false);
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

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

  const handleFavorite = (event) => {
    const removeFav = favoriteRecipes.filter((recipe) => (recipe.id !== event.target.id));
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
      <div className="favorites-container">
        <div className="favorite-recipes-menu">
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
        {recipeFilter.map((rec, index) => (
          <div key={ rec.id } className="cards-recipe-made">
            <Link
              key={ rec.id }
              to={ `/${rec.type}s/${rec.id}` }
            >
              <img
                className="recipe-fav-img"
                src={ rec.image }
                alt={ rec.name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>
            <div className="favorite-text">
              <h4
                data-testid={ `${index}-horizontal-top-text` }
                className="horizontal-top-text"
              >
                {rec.area
                  ? `${rec.area} - ${rec.category}` : `${rec.alcoholicOrNot}`}
              </h4>
              <Link
                key={ rec.id }
                to={ `/${rec.type}s/${rec.id}` }
                className="horizontal-name"
              >
                <h2
                  data-testid={ `${index}-horizontal-name` }
                >
                  {rec.name}
                </h2>
              </Link>
            </div>
            <div className="fav-share-btn">
              <ShareButton
                clipBoard={ (`http://localhost:3000/${rec.type}s/${rec.id}`) }
                testid={ `${index}-horizontal-share-btn` }
              />
              <button
                type="button"
                onClick={ handleFavorite }
                image={ blackHeartIcon }
                className="recipe-page-btn"
              >
                <img
                  alt="liked"
                  className="favorite-btn-img"
                  src={ blackHeartIcon }
                  id={ rec.id }
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
              </button>
            </div>
          </div>
        )) }
      </div>
      <Footer />
    </section>
  );
}

export default Favorites;
