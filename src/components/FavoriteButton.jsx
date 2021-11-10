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
    case 'Meal': return setPage('comidas');
    case 'Drink': return setPage('bebidas');
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
  }, []);

  const handleClick = () => {
    const arrayFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'))
    if (arrayFavorites.some(({ id }) => id === recipe[`id${type}`])) {
      setFavoriteRecipes(favoriteRecipes.filter(
        ({ id }) => id !== recipe[`id${type}`],
      ));
    } else {
      setFavoriteRecipes([
        ...favoriteRecipes,
        { id: recipe[`id${type}`],
          type: page,
          area: recipe.strArea,
          category: recipe.strCategory,
          alcoholicorNot: (type === 'Drink' ? recipe.strAlcoholic : ''),
          name: recipe[`str${type}`],
          image: recipe[`str${type}Thumb`],
        },
      ]);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    console.log('teste');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  // useEffect(() => {checkIfIsFavorite()},[])

  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="botão favoritar"
          data-testid="favorite-btn"
        />
      </button>
    </div>
  );
}

export default FavoriteButton;
