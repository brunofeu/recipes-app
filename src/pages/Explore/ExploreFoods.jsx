import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExploreFoods() {
  const history = useHistory();
  return (
    <>
      <div>
        <Header title="Explorar Comidas" />
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/comidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => history.push('/explorar/comidas/area') }
        >
          Por Local de Origem
        </button>

        {/* ajustar botao me surpreenda. necessita da API */}
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Me Surpreenda!
        </button>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ExploreFoods;
