import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

function ExploreDrinks() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explorar/bebidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      {/* ajustar botao me surpreenda. necessita da API */}
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push('/explorar/bebidas') }
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

export default ExploreDrinks;
