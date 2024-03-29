import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FavoriteButton from '../../components/FavoriteButton';
import Footer from '../../components/Footer';
import IngredientsList from '../../components/IngredientsList';
import RecipeInstructions from '../../components/RecipeInstructions';
import RecomendationCard from '../../components/RecomendationCard';
import ShareButton from '../../components/ShareButton';
import StartButton from '../../components/StartButton';
import RecipeContext from '../../context/RecipeContext';

function DrinkRecipes(props) {
  const { match: { params: { id } } } = props;
  const history = useHistory();
  const { fetchMeal, fetchDrink } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inProgress, setInProgress] = useState(false);

  const fetchRecipeDetail = async () => {
    setIsLoading(true);
    const listDrink = (await fetchDrink('lookup', 'i', id));
    const listRecomendations = (await fetchMeal('search', 's', ''));
    setRecomendations(listRecomendations);
    setRecipe(listDrink[0]);
    setIsLoading(false);
  };

  const checkInProgress = () => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(
        { meals: {}, cocktails: {} },
      ));
    } else {
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (!inProgressRecipes.meals) inProgressRecipes.meals = {};
      if (!inProgressRecipes.cocktails) inProgressRecipes.cocktails = [];
      setInProgress(Object.keys(inProgressRecipes.cocktails).some(
        (progress) => progress === id,
      ));
    }
  };

  useEffect(() => {
    fetchRecipeDetail();
    checkInProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDone = () => {
    if (!localStorage.getItem('doneRecipes')) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    const checkDone = JSON.parse(localStorage.getItem('doneRecipes'));
    return checkDone.some((item) => item.id === id);
  };

  return (
    <div>
      {!isLoading && (
        <div>
          <img
            src={ recipe.strDrinkThumb }
            alt={ recipe.strDrink }
            data-testid="recipe-photo"
            className="recipe-img"
          />
          <div className="recipe-container">
            <div className="header-recipe">
              <div className="header-recipe-title">
                <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
                <h4 data-testid="recipe-category">{ recipe.strAlcoholic }</h4>
              </div>
              <div className="header-recipe-btn">
                <ShareButton
                  clipBoard={ window.location.href }
                  testid="share-btn"
                />
                <FavoriteButton recipe={ recipe } type="Drink" />
              </div>
            </div>
            <div className="recipes-detail">
              <IngredientsList recipe={ recipe } />
              <RecipeInstructions recipe={ recipe } />
            </div>
            <RecomendationCard recomendations={ recomendations } type="Meal" />
          </div>
          <StartButton
            location={ history.location.pathname }
            inProgress={ inProgress }
            hidden={ isDone() }
          />
          <Footer />
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
