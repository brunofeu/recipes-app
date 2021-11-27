import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/RecipeCard.css';

import { Card } from 'react-bootstrap';

function RecipeCard(props) {
  const CARDS_QUANTITY = 12;
  const { infos } = props;
  const [infoArray, id, image, name, type] = infos;
  if (!infoArray) return <div />;
  const recipes = infoArray.slice(0, CARDS_QUANTITY);
  return (
    <section className="cards-section">
      {recipes.map((recipe, index) => (
        <Link className="cards" key={ recipe[`${id}`] } to={ `/${type}/${recipe[id]}` }>
          <Card
            className="card-btn"
            id={ recipe[id] }
            data-testid={ `${index}-recipe-card` }
          >
            <Card.Img
              className="card-image"
              variant="top"
              src={ recipe[`${image}`] }
              alt="food"
              value="teste"
              data-testid={ `${index}-card-img` }
            />
            <Card.ImgOverlay className="card-title-overlay">
              <Card.Title
                className="card-title"
                data-testid={ `${index}-card-name` }
              >
                <h4>{recipe[`${name}`]}</h4>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Link>
      ))}
    </section>
  );
}

RecipeCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  infos: PropTypes.shape({
    slice: PropTypes.func,
  }).isRequired,
}.isRequired;

export default RecipeCard;
