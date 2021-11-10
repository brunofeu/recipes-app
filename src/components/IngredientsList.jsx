import PropTypes from 'prop-types';
import React from 'react';

function IngredientsList({ recipe }) {
  const ingredients = {
    ingredient: Object.keys(recipe).filter((item) => item.includes('strIngredient')),
    measure: Object.keys(recipe).filter((item) => item.includes('strMeasure')),
  };

  return (
    <div>
      <h2>Ingredientes</h2>
      <ul>
        {
          ingredients.ingredient.map((item, index) => (
            recipe[item] !== '' && recipe[item] !== null
              ? (
                <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                  {`${recipe[item]} - ${recipe[ingredients.measure[index]]}`}
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
