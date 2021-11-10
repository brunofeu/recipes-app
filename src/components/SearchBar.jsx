import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

function SearchBar() {
  const { fetchDrink, fetchMeal, page, meal, drink } = useContext(RecipeContext);
  const [data, setData] = useState({
    searchText: '',
    searchSubmited: '',
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
      searchSubmited: event.target.value,
    });
  };

  const mealRedirect = () => {
    // const { history } = prop;
    const goTo = meal.length;
    const magicNumber = 1;

    if (goTo === magicNumber) {
      history.push(`/comidas/${meal[0].idMeal}`);
      console.log(`/comidas/${meal[0].idMeal}`);
    } if (goTo < magicNumber) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const drinkRedirect = () => {
    // const { history } = props;
    const goTo = drink.length;
    const magicNumber = 1;

    if (goTo === magicNumber) {
      history.push(`/bebidas/${drink[0].idDrink}`);
    } if (goTo < magicNumber) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const fetchRecipe = (method, option, search) => {
    if (page === 'comidas') {
      return fetchMeal(method, option, search) /*&& mealRedirect()*/;
    } if (page === 'bebidas') {
      return fetchDrink(method, option, search) /*&& drinkRedirect()*/;
    }
  };

  const handleClick = () => {
    if (data.searchSubmited === 'firstLetter' && data.searchText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } if (data.searchSubmited === 'ingredient') {
      fetchRecipe('filter', 'i', data.searchText);
      // console.log(data.searchText);
    } if (data.searchSubmited === 'name') {
      fetchRecipe('search', 's', data.searchText);
      // console.log(data.searchText);
    } if (data.searchSubmited === 'firstLetter') {
      fetchRecipe('search', 'f', data.searchText);
      // console.log(data.searchText);
    } else {
      // console.log('testess');
    }
    // console.log(meal);
    // console.log(drink);
    // console.log(page);
  };

  useEffect(() => {
    mealRedirect();
  }, [meal]);
  useEffect(() => {
    drinkRedirect();
  }, [drink]);

  return (
    <div>
      <input
        data-testid="search-input"
        labelText="Procurar..."
        name="search"
        onChange={ handleChange }
      />
      <div>
        <input
          data-testid="ingredient-search-radio"
          id="byIngridient"
          name="radioBtn"
          type="radio"
          value="ingredient"
          onClick={ handleCheck }
        />
        Ingrediente
        <input
          data-testid="name-search-radio"
          id="byName"
          name="radioBtn"
          type="radio"
          value="name"
          onClick={ handleCheck }
        />
        Nome
        <input
          data-testid="first-letter-search-radio"
          id="byFirstLetter"
          name="radioBtn"
          type="radio"
          value="firstLetter"
          onClick={ handleCheck }
        />
        Primeira Letra
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
