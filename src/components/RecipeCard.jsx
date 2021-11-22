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
        <div className="cards" key="cards">
          <Link to={ `/${type}/${recipe[id]}` } key={ recipe[`${id}`] }>
            <Card
              id={ recipe[id] }
              style={ { width: '18rem' } }
              data-testid={ `${index}-recipe-card` }
            >
              <Card.Img
                className="card-image"
                variant="top"
                src={ recipe[`${image}`] }
                alt="food"
                data-testid={ `${index}-card-img` }
              />
              <Card.Title
                className="card-link"
                data-testid={ `${index}-card-name` }
              >
                <h3>{recipe[`${name}`]}</h3>
              </Card.Title>
            </Card>
          </Link>
        </div>
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
