import PropTypes from 'prop-types';
import React, { useState } from 'react';

function RecomendationCard({ recomendations = [''], type }) {
  const ARRAY_POSITION_SIX = 6;
  const sixRecipes = recomendations.slice(0, ARRAY_POSITION_SIX);
  const [indexCards, setIndexCards] = useState([0, 1]);

  const handleClick = (event) => {
    const CAROUSEL_INIT = 0;
    const CAROUSEL_LAST = 5;
    setIndexCards(indexCards.map((prevNumber) => {
      switch (event.target.value) {
      case 'subtract':
        return prevNumber === CAROUSEL_INIT ? CAROUSEL_LAST : prevNumber - 1;
      case 'add':
        return prevNumber === CAROUSEL_LAST ? CAROUSEL_INIT : prevNumber + 1;
      default:
        return null;
      }
    }));
  };

  return (

    <div>
      <h2>Recomendadas</h2>
      <button type="button" onClick={ handleClick } value="subtract">{'<'}</button>
      <ul>
        {sixRecipes.map((recipe, index) => (
          <li
            key={ recipe[`id${type}`] }
            data-testid={ `${index}-recomendation-card` }
            id={ index }
            hidden={ !indexCards.includes(index) }
          >
            <p
              data-testid={ `${index}-recomendation-title` }
            >
              { recipe[`str${type}`] }
            </p>
          </li>
        ))}
      </ul>
      <button type="button" onClick={ handleClick } value="add">{'>'}</button>
    </div>
  );
}

RecomendationCard.propTypes = {
  recomendations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  type: PropTypes.string.isRequired,
};

export default RecomendationCard;
