import PropTypes from 'prop-types';
import React from 'react';

import { Card } from 'react-bootstrap';

function CardReceita(props) {
  const CARDS_QUANTITY = 12;
  const { infos } = props;
  const [infoArray, id, image, name] = infos;
  const recipes = infoArray.slice(0, CARDS_QUANTITY);
  return (
    <section>
      {recipes.map((recipe, index) => (
        <Card
          style={ { width: '18rem' } }
          key={ recipe[`${id}`] }
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
      ))}
    </section>
  );
}

CardReceita.propTypes = {
  infos: PropTypes.shape({
    slice: PropTypes.func,
  }).isRequired,
};

export default CardReceita;
