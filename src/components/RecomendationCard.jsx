import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

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

  const typeLink = () => (type === 'Meal' ? 'comidas' : 'bebidas');

  return (
    <div>
      <h2 className="recomendation-title">Recomendadas</h2>
      <div className="recomendation-card-container">
        <button
          className="carousel-btn"
          type="button"
          onClick={ handleClick }
          value="subtract"
        >
          {'<<'}
        </button>

        {sixRecipes.map((recipe, index) => (
          <Link
            className="cards"
            key={ recipe[`id${type}`] }
            to={ `/recipes-app/${typeLink()}/${recipe[`id${type}`]}` }
            hidden={ !indexCards.includes(index) }
          >
            <Card
              className="card-btn"
              id={ index }
              style={ { borderRadius: '10px' } }
              data-testid={ `${index}-recomendation-card` }
            >
              <Card.Img
                style={ { borderRadius: '10px' } }
                className="card-image"
                src={ recipe[`str${type}Thumb`] }
                alt="food"
              />
              <Card.ImgOverlay className="card-title-overlay">
                <Card.Title
                  className="card-title"
                  data-testid={ `${index}-recomendation-title` }
                >
                  <h4>{recipe[`str${type}`] }</h4>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        ))}
        <button
          className="carousel-btn"
          type="button"
          onClick={ handleClick }
          value="add"
        >
          {'>>'}
        </button>
      </div>

    </div>
  );
}

RecomendationCard.propTypes = {
  recomendations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  type: PropTypes.string.isRequired,
};

export default RecomendationCard;
