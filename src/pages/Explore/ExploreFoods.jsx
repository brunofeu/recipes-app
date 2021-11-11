import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeContext from '../../context/RecipeContext';

function ExploreFoods() {
  const history = useHistory();
  const { fetchRandom } = useContext(RecipeContext);

  const handleClick = async () => {
    const randomRecipe = await fetchRandom('themealdb');
    history.push(`/comidas/${randomRecipe[0].idMeal}`);
  };

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
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleClick }
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
