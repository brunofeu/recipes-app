import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExploreMenu() {
  const history = useHistory();
  return (
    <>
      <div>
        <Header title="Explorar" showSearchBtn={ false } />
        <button
          type="button"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ExploreMenu;
