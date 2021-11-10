import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FavoriteButton from '../../components/FavoriteButton';
import IngredientsList from '../../components/IngredientsList';
import RecipeInstructions from '../../components/RecipeInstructions';
import RecomendationCard from '../../components/RecomendationCard';
import ShareButton from '../../components/ShareButton';
import StartButton from '../../components/StartButton';
import RecipeContext from '../../context/RecipeContext';

function FoodRecipes(props) {
  const { match: { params: { id } } } = props;
  const history = useHistory();
  const { fetchMeal, fetchDrink } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState({});
  const [recomendations, setRecomendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecipeDetail = async () => {
    setIsLoading(true);
    const listMeal = (await fetchMeal('lookup', 'i', id));
    const listRecomendations = (await fetchDrink('search', 's', ''));
    setRecomendations(listRecomendations);
    setRecipe(listMeal[0]);
    setIsLoading(false);
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
          <FavoriteButton recipe={ recipe } type="Meal" />
          <h3 data-testid="recipe-category">{ recipe.strCategory }</h3>
          <IngredientsList recipe={ recipe } />
          <RecipeInstructions recipe={ recipe } />
          <h2 data-testid="video">Video</h2>
          <RecomendationCard recomendations={ recomendations } type="Drink" />
          <StartButton location={ history.location.pathname } />
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
