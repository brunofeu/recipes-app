import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import RecipeContext from '../../context/RecipeContext';

function ExploreByPlaces() {
  const { meal, fetchMeal } = useContext(RecipeContext);
  const [areas, setAreas] = useState([]);

  const getAreas = async () => {
    const fetchAreas = await fetchMeal('list', 'a', 'list');
    setAreas(fetchAreas);
  };

  useEffect(() => {
    fetchMeal();
    getAreas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Explorar Origem" showSearchBtn="true" />
      {areas.length > 0
        && (
          <select data-testid="explore-by-area-dropdown" title={ areas[0].strArea }>
            {areas.map(({ strArea }, index) => (
              <option
                key={ index }
                data-testid={ `${strArea}-option` }
                value={ strArea }
              >
                {strArea}
              </option>
            ))}
          </select>)}
      { meal !== null
      && <RecipeCard
        infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal', 'comidas'] }
      />}
    </div>
  );
}

export default ExploreByPlaces;
