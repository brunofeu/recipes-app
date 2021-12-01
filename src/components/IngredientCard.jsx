import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import RecipeContext from '../context/RecipeContext';

function IngredientCard({ list, url }) {
  const history = useHistory();
  const { setFilter } = useContext(RecipeContext);
  const [key, setKey] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setKey(url === 'themealdb' ? 'strIngredient' : 'strIngredient1');
    setType(url === 'themealdb' ? 'comidas' : 'bebidas');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async ({ target: { name } }) => {
    setFilter(name);
    history.push(`/${type}`);
  };

  return (
    <div className="menu-ingredients">
      <ul>
        {list.map((item, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-card` }>
            <button
              className="ingredient-button"
              type="button"
              name={ `${item[key]}` }
              onClick={ handleClick }
            >
              <img
                name={ `${item[key]}` }
                src={ `https://www.${url}.com/images/ingredients/${item[key]}-Small.png` }
                alt={ `${item[key]}-img` }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{item[key]}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

IngredientCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  url: PropTypes.string.isRequired,
};

export default IngredientCard;
