import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import clipboardCopy from 'clipboard-copy';
import fetchFoodById from '../../services/foodAPI';
import shareImage from '../../images/shareIcon.svg';
import { getFavorites, handleFavoriteAuxiliar }
  from '../../auxiliar/AuxiliarFunctions';

import '../../styles/RecipeInProgress.css';
import Footer from '../../components/Footer';

function FoodinProgress({ history, match: { params: { id } } }) {
  const auxiliar = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getLocalStorage) {
      return [];
    }
    if (Object.keys(getLocalStorage).includes('meals')) {
      const findItem = [getLocalStorage].find((storage) => Object
        .keys(storage.meals).includes(id));
      if (findItem) return getLocalStorage.meals[id];
      return [];
    }
    return [];
  };
  const localStorageChecked = auxiliar();
  const isFavorite = getFavorites(id);
  const [foodInfo, setFoodInfo] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [disable, setDisable] = useState(true);
  const [link, setLink] = useState('');
  const [icon, setIcon] = useState(isFavorite);
  const [checkArray, setCheckArray] = useState(localStorageChecked);

  useEffect(() => {
    fetchFoodById(id).then(({ meals }) => setFoodInfo(meals));
  }, [id]);

  useEffect(() => {
    if (ingredients.length === 0) {
      const MAX_INGREDIENT = 20;
      foodInfo.map((item) => {
        let arr = [];
        for (let i = 1; i <= MAX_INGREDIENT; i += 1) {
          const itemIngredient = `strIngredient${i}`;
          const itemMeasure = `strMeasure${i}`;
          if (item[itemIngredient].length === 0) {
            setIngredients([...arr]);
            break;
          }
          arr = [
            ...arr,
            { strMeasure: item[itemMeasure], strIngredient: item[itemIngredient] },
          ];
        }
        return setIngredients(arr);
      });
    }
  });

  const RedirectToRecipesMade = () => {
    const dateNow = new Date();
    const formatDate = `${dateNow}`.split(' GMT')[0];
    const objToSave = foodInfo.map((item) => {
      let tagFormat;
      if (item.strTags) {
        tagFormat = item.strTags.split(', ');
      } else {
        tagFormat = [];
      }
      const obj = {
        id: item.idMeal,
        type: 'comida',
        area: item.strArea,
        category: item.strCategory,
        alcoholicOrNot: '',
        name: item.strMeal,
        image: item.strMealThumb,
        doneDate: formatDate,
        tags: tagFormat,
      };
      return obj;
    });
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipes) {
      localStorage.setItem('doneRecipes', JSON.stringify(objToSave));
    } else {
      localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, ...objToSave]));
    }
    history.push('/receitas-feitas');
  };

  useEffect(() => {
    function saveInLocal() {
      let getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (!getLocal) {
        const objectStore = {};
        localStorage.setItem('inProgressRecipes', JSON.stringify(objectStore));
        getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
      }
      const objeto = {
        [id]: checkArray,
      };
      localStorage.setItem('inProgressRecipes',
        JSON.stringify({ ...getLocal, meals: { ...getLocal.meals, ...objeto } }));
    }
    saveInLocal();
  }, [checkArray, id]);

  const riskCompleteds = ({ target: { value, checked } }, index) => {
    if (checked) {
      setCheckArray([...checkArray, index]);
    } else {
      setCheckArray([...checkArray.filter((item) => item !== index)]);
    }

    const labelCheckbox = document.querySelectorAll('.label-checkbox');
    labelCheckbox.forEach((inputs) => {
      if (inputs.textContent === value) {
        inputs.classList.toggle('texto-riscado');
      }
    });
  };

  const handleFavorite = () => {
    const objSave = foodInfo.map((item) => {
      const obj = {
        id: item.idMeal,
        type: 'comida',
        area: item.strArea,
        category: item.strCategory,
        alcoholicOrNot: '',
        name: item.strMeal,
        image: item.strMealThumb,
      };
      return obj;
    })[0];
    handleFavoriteAuxiliar(objSave, setIcon, icon);
  };

  const handleLinks = () => {
    setLink('Link copiado!');
    const actualLocation = String(window.location.href);
    const a = actualLocation.split('/');
    const actual = `${a[0]}//${a[1]}${a[2]}/${a[3]}/${a[4]}`;
    const input = document.createElement('input');
    document.body.appendChild(input);
    clipboardCopy(actual);
    document.body.removeChild(input);
  };

  const verifyChecked = () => {
    if (ingredients.length === checkArray.length) setDisable(false);
    else setDisable(true);
  };

  useEffect(
    () => verifyChecked(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ingredients, checkArray],
  );

  return (
    <div className="in-progress-container">
      { foodInfo.map((food) => {
        const allFood = (
          <div key={ food.idMeal }>
            <img
              src={ food.strMealThumb }
              alt={ food.strMeal }
              data-testid="recipe-photo"
              className="recipe-img"
            />
            <div className="in-progress-header-recipe">
              <div className="header-recipe-title">
                <h1 data-testid="recipe-title">{ food.strMeal }</h1>
                <h4 data-testid="recipe-category">{ food.strCategory }</h4>
                <p>{ link }</p>
              </div>
              <div className="header-recipe-btn">
                <button
                  className="recipe-page-btn"
                  type="button"
                  data-testid="share-btn"
                  onClick={ handleLinks }
                >
                  <img
                    className="favorite-btn-img"
                    src={ shareImage }
                    alt="botao-compartilhar"
                  />
                </button>
                <button
                  className="recipe-page-btn"
                  type="button"
                  onClick={ handleFavorite }
                >
                  <img
                    className="favorite-btn-img"
                    src={ icon }
                    alt="icone-de-favoritar"
                    data-testid="favorite-btn"
                  />
                </button>
              </div>
            </div>
            <div className="recipes-checkbox">
              <ul>
                { ingredients.map(({ strMeasure, strIngredient }, index) => {
                  const ingrID = `${index}-ingredient-step`;
                  return (
                    <li key={ index } className="list-checkbox">
                      <label
                        data-testid={ ingrID }
                        htmlFor={ index }
                        className={ (
                          checkArray.includes(index)
                            ? 'inputs-checkbox texto-riscado'
                            : 'inputs-checkbox') }
                      >
                        <input
                          onChange={ verifyChecked }
                          checked={ checkArray.includes(index) }
                          className="inputs-checkbox"
                          id={ index }
                          type="checkbox"
                          value={ `${strMeasure} ${strIngredient}` }
                          onClick={ (e) => riskCompleteds(e, index) }
                        />
                        { ` ${strMeasure} ${strIngredient}` }
                      </label>
                    </li>
                  );
                }) }
              </ul>
            </div>
            <p
              className="recipe-detail"
              data-testid="instructions"
            >
              { food.strInstructions }
            </p>
          </div>
        );
        return allFood;
      }) }
      <button
        className="finish-recipe-btn"
        disabled={ disable }
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ RedirectToRecipesMade }
      >
        Finalizar Receita
      </button>
      <Footer />
    </div>
  );
}

FoodinProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default FoodinProgress;
