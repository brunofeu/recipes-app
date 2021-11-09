import React, { useContext, useEffect, useState } from 'react';
import RecipeContext from '../context/RecipeContext';

function SearchBar() {
  const { fetchMeal, meal } = useContext(RecipeContext);
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

  const handleClick = () => {
    if (data.searchSubmited === 'firstLetter' && data.searchText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } if (data.searchSubmited === 'ingredient') {
      fetchMeal('filter', 'i', data.searchText);
      console.log('oi');
    } if (data.searchSubmited === 'name') {
      fetchMeal('search', 's', data.searchText);
      console.log('bye');
    } if (data.searchSubmited === 'firstLetter') {
      fetchMeal('search', 'f', data.searchText);
      console.log('teste');
    } else {
      console.log(data.searchSubmited);
    }
    console.log(meal);
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
