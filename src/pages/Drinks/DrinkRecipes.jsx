import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import FavoriteButton from '../../components/FavoriteButton';
import IngredientsList from '../../components/IngredientsList';
import RecipeInstructions from '../../components/RecipeInstructions';
import RecomendationCard from '../../components/RecomendationCard';
import ShareButton from '../../components/ShareButton';
import StartButton from '../../components/StartButton';
import RecipeContext from '../../context/RecipeContext';

function DrinkRecipes(props) {
  const { match: { params: { id } } } = props;
  const { fetchMeal, fetchDrink } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecipeDetail = async () => {
    setIsLoading(true);
    const listDrink = (await fetchDrink('lookup', 'i', id));
    const listRecomendations = (await fetchMeal('search', 's', ''));
    setRecomendations(listRecomendations);
    setRecipe(listDrink[0]);
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
            src={ recipe.strDrinkThumb }
            alt="imagem-da-receita"
            data-testid="recipe-photo"
          />
          <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
          <ShareButton />
          <FavoriteButton />
          <h3 data-testid="recipe-category">{ recipe.strAlcoholic }</h3>
          <IngredientsList recipe={ recipe } />
          <RecipeInstructions recipe={ recipe } />
          <RecomendationCard recomendations={ recomendations } type="Meal" />
          <StartButton />
        </div>
      )}
    </div>
  );
}

DrinkRecipes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrinkRecipes;
