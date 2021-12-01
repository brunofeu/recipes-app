import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipeContext from '../context/RecipeContext';

function FavoriteButton({ recipe, type }) {
  const { page, setPage } = useContext(RecipeContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => (
    (!localStorage.getItem('favoriteRecipes'))
      ? localStorage.setItem('favoriteRecipes', JSON.stringify([]))
      : setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')))
  ), []);

  useEffect(() => {
    switch (type) {
    case 'Meal': return setPage('comida');
    case 'Drink': return setPage('bebida');
    default: return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIfIsFavorite = () => {
    const arrayFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFav = arrayFavorites.some(({ id }) => id === recipe[`id${type}`]);
    setIsFavorite(isFav);
  };

  useEffect(() => {
    checkIfIsFavorite();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    const arrayFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (arrayFavorites.some(({ id }) => id === recipe[`id${type}`])) {
      setFavoriteRecipes(favoriteRecipes.filter(
        ({ id }) => id !== recipe[`id${type}`],
      ));
    } else {
      setFavoriteRecipes([
        ...favoriteRecipes,
        { id: recipe[`id${type}`],
          type: page,
          area: (type === 'Drink' ? '' : recipe.strArea),
          category: recipe.strCategory,
          alcoholicOrNot: (type === 'Drink' ? recipe.strAlcoholic : ''),
          name: recipe[`str${type}`],
          image: recipe[`str${type}Thumb`],
        },
      ]);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
        className="recipe-page-btn"
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="botão favoritar"
          data-testid="favorite-btn"
          className="favorite-btn-img"
        />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.shape({
    strAlcoholic: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoriteButton;
