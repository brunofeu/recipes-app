import PropTypes from 'prop-types';
import React from 'react';

function RecomendationCard({ recomendations = [''], type }) {
  const ARRAY_POSITION_SIX = 6;
  const sixRecipes = recomendations.slice(0, ARRAY_POSITION_SIX);

  return (
    <div>
      <h2>Recomendações</h2>
      <ul>
        {sixRecipes.map((recipe, index) => (
          <li
            key={ recipe[`id${type}`] }
            data-testid={ `${index}-recomendation-card` }
          >
            { recipe[`str${type}`] }
          </li>
        ))}
      </ul>
    </div>
  );
}

RecomendationCard.propTypes = {
  recomendations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  type: PropTypes.string.isRequired,
};

export default RecomendationCard;
