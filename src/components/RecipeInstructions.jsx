import PropTypes from 'prop-types';
import React from 'react';

function RecipeInstructions({ recipe }) {
  return (
    <div data-testid="instructions">
      <h2> Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

RecipeInstructions.propTypes = {
  recipe: PropTypes.shape({
    strInstructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeInstructions;
