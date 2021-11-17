import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

function SearchBar() {
  const {
    alertTrigger,
    fetchDrink,
    fetchMeal,
    page,
    meal,
    drink,
  } = useContext(RecipeContext);

  const [data, setData] = useState({
    searchText: '',
    selectedOption: '',
  });
  const history = useHistory();

  const handleChange = (event) => {
    setData({
      ...data,
      searchText: event.target.value,
    });
  };

  const handleCheck = (event) => {
    setData({
      ...data,
      selectedOption: event.target.value,
    });
  };

  const mealRedirect = () => {
    const goTo = meal.length;
    const magicNumber = 1;

    if (goTo === magicNumber) {
      history.push(`/comidas/${meal[0].idMeal}`);
    }
  };

  const drinkRedirect = () => {
    const goTo = drink.length;
    const magicNumber = 1;

    if (goTo === magicNumber) {
      history.push(`/bebidas/${drink[0].idDrink}`);
    }
  };

  const redirectTo = () => {
    if (page === 'comidas') {
      return mealRedirect();
    } if (page === 'bebidas') {
      return drinkRedirect();
    }
  };

  const warningTo = () => {
    if (meal === null || drink === null) {
      alertTrigger();
    } else {
      redirectTo();
    }
  };

  const fetchRecipe = (method, option, search) => {
    if (page === 'comidas') {
      return fetchMeal(method, option, search);
    } if (page === 'bebidas') {
      return fetchDrink(method, option, search);
    }
  };

  const handleClick = () => {
    if (data.selectedOption === 'firstLetter' && data.searchText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } if (data.selectedOption === 'ingredient') {
      fetchRecipe('filter', 'i', data.searchText);
    } if (data.selectedOption === 'name') {
      fetchRecipe('search', 's', data.searchText);
    } if (data.selectedOption === 'firstLetter') {
      fetchRecipe('search', 'f', data.searchText);
    }
  };

  useEffect(() => {
    warningTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meal, drink]);

  return (
    <div>
      <input
        data-testid="search-input"
        labelText="Procurar..."
        name="search"
        onChange={ handleChange }
      />
      <div>
        <label htmlFor="byIngridient">
          <input
            data-testid="ingredient-search-radio"
            id="byIngridient"
            name="radioBtn"
            type="radio"
            value="ingredient"
            onClick={ handleCheck }
          />
          Ingrediente
        </label>
        <label htmlFor="byName">
          <input
            data-testid="name-search-radio"
            id="byName"
            name="radioBtn"
            type="radio"
            value="name"
            onClick={ handleCheck }
          />
          Nome
        </label>
        <label htmlFor="byFirstLetter">
          <input
            data-testid="first-letter-search-radio"
            id="byFirstLetter"
            name="radioBtn"
            type="radio"
            value="firstLetter"
            onClick={ handleCheck }
          />
          Primeira Letra
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
