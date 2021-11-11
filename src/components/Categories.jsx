import React from 'react';
import PropTypes from 'prop-types';

function Categories(props) {
  const { categories } = props;
  const BTN_QUANTITY = 5;
  const shownCategories = categories.slice(0, BTN_QUANTITY);
  return (
    <div>
      {shownCategories.map((category, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${category.strCategory}-category-filter` }
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.shape({
    slice: PropTypes.func,
  }).isRequired,
};

export default Categories;
