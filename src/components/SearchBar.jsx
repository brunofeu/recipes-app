import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        data-testid="search-input"
        name="search"
      />
      <label htmlFor="byIngridient">
        <input
          data-testid="ingredient-search-radio"
          id="byIngridient"
          type="radio"
        />
        Ingrediente
      </label>
      <label htmlFor="byName">
        <input
          data-testid="name-search-radio"
          id="byName"
          type="radio"
        />
        Nome
      </label>
      <label htmlFor="byFirstLetter">
        <input
          data-testid="first-letter-search-radio"
          id="byFirstLetter"
          type="radio"
        />
        Primeira Letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
