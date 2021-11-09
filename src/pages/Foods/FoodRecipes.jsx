import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import FavoriteButton from '../../components/FavoriteButton';
import IngredientsList from '../../components/IngredientsList';
import RecomendationCard from '../../components/RecomendationCard';
import ShareButton from '../../components/ShareButton';
import StartButton from '../../components/StartButton';
import RecipeContext from '../../context/RecipeContext';

function FoodRecipes(props) {
  const { match: { params: { id } } } = props;
  const { fetchMeal, fetchDrink } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState({});
  const [recomendations, setRecomendations] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchRecipeDetail = async () => {
    setIsloading(true);
    const listMeal = (await fetchMeal('lookup', 'i', id));
    const listRecomendations = (await fetchDrink('search', 's', ''));
    setRecomendations(listRecomendations);
    setRecipe(listMeal[0]);
    setIsloading(false);
  };

  useEffect(() => {
    fetchRecipeDetail();
  }, []);

  return (
    <div>
      {!isLoading && (
        <div>
          <img
            src={ recipe.strMealThumb }
            alt="imagem-da-receita"
            data-testid="recipe-photo"
          />
          <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
          <ShareButton />
          <FavoriteButton />
          <h3 data-testid="recipe-category">{ recipe.strCategory }</h3>
          <IngredientsList recipe={ recipe } />
          <h2 data-testid="instructions"> Instructions </h2>
          <h2 data-testid="video">Video</h2>
          <RecomendationCard recomendations={ recomendations } type="Drink" />
          <StartButton />
        </div>
      )}
    </div>
  );
}

FoodRecipes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodRecipes;
