import PropTypes from 'prop-types';
import React from 'react';

function IngredientsList({ recipe }) {
  console.log(recipe)
  const ingredients = Object.keys(recipe).filter(
    (item) => item.includes('strIngredient'),
  );

  return (
    <div>
      <h2>Ingredientes</h2>
      <ul>
        {
          ingredients.map((item, index) => (
            recipe[item] !== '' && recipe[item] !== null
              ? (
                <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                  {recipe[item]}
                </li>
              )
              : null
          ))
        }
      </ul>
    </div>
  );
}

IngredientsList.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default IngredientsList;
