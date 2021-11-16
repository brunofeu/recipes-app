import React, { useContext, useEffect, useState } from 'react';
import RecipeContext from '../context/RecipeContext';

function SearchBar() {
  const { fetchDrink, fetchMeal, page, meal, drink } = useContext(RecipeContext);
  const [data, setData] = useState({
    searchText: '',
    searchSubmited: '',
  });

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

  const fetchRecipe = (method, option, search) => {
    if (page === 'comidas') {
      return fetchMeal(method, option, search);
    } if (page === 'bebidas') {
      return fetchDrink(method, option, search);
    }
  };

  const handleClick = () => {
    if (data.searchSubmited === 'firstLetter' && data.searchText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } if (data.searchSubmited === 'ingredient') {
      fetchRecipe('filter', 'i', data.searchText);
      console.log(data.searchText);
    } if (data.searchSubmited === 'name') {
      fetchRecipe('search', 's', data.searchText);
      console.log(data.searchText);
    } if (data.searchSubmited === 'firstLetter') {
      fetchRecipe('search', 'f', data.searchText);
      console.log(data.searchText);
    } else {
      console.log('testess');
    }
    console.log(meal);
    console.log(drink);
    console.log(page);
  };

  useEffect(() => {}, []);

  // useEffect(() => {
  //   fetchAPI();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

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

export default SearchBar;
