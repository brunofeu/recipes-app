import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
<<<<<<< HEAD
import RecipeContext from '../../context/RecipeContext';
import Footer from '../../components/Footer';
=======
import Footer from '../../components/Footer';
import RecipeContext from '../../context/RecipeContext';
>>>>>>> b6b083269d4bfa83cc9a1b3cbf810f00a5d12891

function ExploreDrinks() {
  const history = useHistory();
  const { fetchRandom } = useContext(RecipeContext);

  const handleClick = async () => {
    const randomRecipe = await fetchRandom('thecocktaildb');
    history.push(`/bebidas/${randomRecipe[0].idDrink}`);
  };

  return (
    <>
<<<<<<< HEAD
      <div>
        <Header title="Explorar Bebidas" />
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
=======
     <div>
      <Header title="Explorar Bebidas" />
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
>>>>>>> b6b083269d4bfa83cc9a1b3cbf810f00a5d12891
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ExploreDrinks;
