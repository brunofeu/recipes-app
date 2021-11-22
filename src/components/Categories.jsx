import React from 'react';
import PropTypes from 'prop-types';

function Categories(props) {
  const { categories, onClick, onAll } = props;
  const BTN_QUANTITY = 5;
  const shownCategories = categories.slice(0, BTN_QUANTITY);

  return (
    <div>
      {shownCategories.map((category, index) => (
        <button
          key={ index }
          type="button"
          name={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ onClick }
        >
          {category.strCategory}
        </button>
      ))}
      <button
        type="button"
        name="All"
        data-testid="All-category-filter"
        onClick={ () => onAll() }
      >
        All

      </button>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAll: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categories;
