import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeCard from '../../components/RecipeCard';
import RecipeContext from '../../context/RecipeContext';

function ExploreByPlaces() {
  const { meal, fetchMeal } = useContext(RecipeContext);
  const [areas, setAreas] = useState([]);
  const [selectValue, setSelectValue] = useState('All');

  const getAreas = async () => {
    const fetchAreas = await fetchMeal('list', 'a', 'list');
    // fetchAreas.unshift({ strArea: 'All' });
    setAreas(fetchAreas);
  };

  const handleSelect = async ({ target: { value } }) => {
    if (value === 'All') {
      await fetchMeal();
    } else {
      await fetchMeal('filter', 'a', value);
    }
    setSelectValue(value);
  };

  useEffect(() => {
    getAreas();
    fetchMeal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Explorar Origem" showSearchBtn="true" />
      <div className="explore-by-area-container">
        {areas.length > 0
          && (
            <select
              data-testid="explore-by-area-dropdown"
              className="explore-dropdown"
              title={ areas[0].strArea }
              value={ selectValue }
              onChange={ handleSelect }
            >
              <option data-testid="All-option">All</option>
              {areas.map(({ strArea }, index) => (
                <option
                  key={ index }
                  data-testid={ `${strArea}-option` }
                  value={ strArea }
                >
                  {strArea}
                </option>
              ))}
            </select>
          )}
        { meal !== null
        && <RecipeCard
          infos={ [meal, 'idMeal', 'strMealThumb', 'strMeal', 'comidas'] }
        />}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreByPlaces;
