import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../styles/Explore.css';

function ExploreMenu() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar" showSearchBtn={ false } />
      <div className="menu-explore">
        <button
          type="button"
          data-testid="explore-food"
          onClick={ () => history.push('/recipes-app/explorar/comidas') }
          className="explore-recipe-btn"
        >
          Explorar Comidas
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/recipes-app/explorar/bebidas') }
          className="explore-recipe-btn"
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreMenu;
