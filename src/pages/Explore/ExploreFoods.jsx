import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';
import Footer from '../../components/Footer';

import '../../styles/Explore.css';

function ExploreFoods() {
  const history = useHistory();
  const { fetchRandom } = useContext(RecipeContext);

  const handleClick = async () => {
    const randomRecipe = await fetchRandom('themealdb');
    history.push(`/comidas/${randomRecipe[0].idMeal}`);
  };

  return (
    <>
      <div className="recipes-checkbox">
        <Header title="Explorar Comidas" />
        <div className="menu-explore">
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

export default ExploreFoods;
