import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import RecipeContext from '../context/RecipeContext';

function IngredientCard({ list, url }) {
  const history = useHistory();
  const { fetchDrink, fetchMeal, setFilter } = useContext(RecipeContext);
  const [key, setKey] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setKey(url === 'themealdb' ? 'strIngredient' : 'strIngredient1');
    setType(url === 'themealdb' ? 'comidas' : 'bebidas');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async ({ target: { name } }) => {
    const ingredient = name.replace(' ', '_');
    const filterByIngredient = await (
      type === 'comidas'
        ? fetchMeal('filter', 'i', ingredient)
        : fetchDrink('filter', 'i', ingredient)
    );
    setFilter(ingredient);
    history.push(`/${type}`);
    console.log(filterByIngredient);
    // REQUISITO 77
    // A FUNÇÃO DEVE DIRECIONAR PARA A PÁGINA PRINCIPAL DE COMIDA/BEBIDA FILTRADA PELO INGREDIENTE
    // DEPENDE DA PÁGINA PRINCIPAL
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={ index }>
            <button
              className="ingredient-button"
              type="button"
              name={ `${item[key]}` }
              onClick={ handleClick }
              data-testid={ `${index}-ingredient-card` }
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
