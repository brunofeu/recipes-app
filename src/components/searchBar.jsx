import React from 'react';

function searchBar() {
  return (
    <div>
      <label htmlFor="byIngridient">
        <input
          id="byIngridient"
          type="radio"
        />
        Ingrediente
      </label>
      <label htmlFor="byName">
        <input
          id="byName"
          type="radio"
        />
        Nome
      </label>
      <label htmlFor="byFirstLetter">
        <input
          id="byFirstLetter"
          type="radio"
        />
        Primeira Letra
      </label>
      <button
        type="button"
      >
        Buscar
      </button>
    </div>
  );
}

export default searchBar;
