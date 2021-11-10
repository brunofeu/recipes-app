import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import RecipeContext from '../../context/RecipeContext';

function Drinks() {
  const { setPage } = useContext(RecipeContext);

  useEffect(() => {
    setPage('bebidas');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Bebidas" showSearchBtn="true" />
      Drinks
    </div>
  );
}

export default Drinks;
