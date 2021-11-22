import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import Footer from '../../components/Footer';

import '../../styles/Explore.css';

function ExploreDrinks() {
  const history = useHistory();
  const { fetchRandom } = useContext(RecipeContext);

  const handleClick = async () => {
    const randomRecipe = await fetchRandom('thecocktaildb');
    history.push(`/bebidas/${randomRecipe[0].idDrink}`);
  };

  return (
    <>
      <div>
        <Header title="Explorar Bebidas" />
        <div className="menu-explore">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            onClick={ () => history.push('/explorar/bebidas/ingredientes') }
          >
            Por Ingredientes
          </button>
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ handleClick }
          >
            Me Surpreenda!
          </button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ExploreDrinks;
