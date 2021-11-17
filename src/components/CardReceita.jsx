import PropTypes from 'prop-types';
import React, { /* useContext */ } from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

// import RecipeContext from '../context/RecipeContext';

function CardReceita(props) {
  // const { alertTrigger } = useContext(RecipeContext);
  const CARDS_QUANTITY = 12;
  const { infos } = props;
  const [infoArray, id, image, name, type] = infos;
  const recipes = infoArray.slice(0, CARDS_QUANTITY);
  console.log(recipes[0]);
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

CardReceita.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  infos: PropTypes.shape({
    slice: PropTypes.func,
  }).isRequired,
}.isRequired;

export default CardReceita;
