import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeContext from '../../context/RecipeContext';

function Food() {
  const { setPage } = useContext(RecipeContext);

  useEffect(() => {
    setPage('comidas');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Header title="Comidas" showSearchBtn="true" />
        Food
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Food;
