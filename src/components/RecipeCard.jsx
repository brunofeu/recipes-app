import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

function RecipeCard(props) {
  const CARDS_QUANTITY = 12;
  const { infos } = props;
  const [infoArray, id, image, name, type] = infos;
  if (!infoArray) return <div />;
  const recipes = infoArray.slice(0, CARDS_QUANTITY);
  return (
    <section>
      {recipes.map((recipe, index) => (
        <Link to={ `/${type}/${recipe[id]}` } key={ recipe[`${id}`] }>
          <Card
            id={ recipe[id] }
            style={ { width: '18rem' } }
            data-testid={ `${index}-recipe-card` }
          >
            <Card.Img
              variant="top"
              src={ recipe[`${image}`] }
              alt="food"
              data-testid={ `${index}-card-img` }
            />
            <Card.Title
              data-testid={ `${index}-card-name` }
            >
              {recipe[`${name}`]}
            </Card.Title>
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
