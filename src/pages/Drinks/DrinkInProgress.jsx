import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import clipboardCopy from 'clipboard-copy';
import fetchDrinkById from '../../services/drinkAPI';
import shareImage from '../../images/shareIcon.svg';
import { getFavorites, handleFavoriteAuxiliar }
  from '../../auxiliar/AuxiliarFunctions';

import '../../styles/DrinkInProgress.css';

function DrinkInProgress({ history, match: { params: { id } } }) {
  const auxiliar = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getLocalStorage) {
      return [];
    }
    if (Object.keys(getLocalStorage).includes('cocktails')) {
      const findItem = [getLocalStorage].find((storage) => Object
        .keys(storage.cocktails).includes(id));
      if (findItem) return getLocalStorage.cocktails[id];
      return [];
    }
    return [];
  };
  const localStorageChecked = auxiliar();
  const isFavorite = getFavorites(id);
  const [drinkInfo, setDrinkInfo] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [disable, setDisable] = useState(true);
  const [link, setLink] = useState('');
  const [icon, setIcon] = useState(isFavorite);
  const [checkArray, setCheckArray] = useState(localStorageChecked);

  useEffect(() => {
    fetchDrinkById(id).then(({ drinks }) => setDrinkInfo(drinks));
  }, [id]);

  useEffect(() => {
    if (ingredients.length === 0) {
      const MAX_INGREDIENT = 15;
      drinkInfo.map((item) => {
        let arr = [];
        for (let i = 1; i <= MAX_INGREDIENT; i += 1) {
          const itemIngredient = `strIngredient${i}`;
          const itemMeasure = `strMeasure${i}`;
          if (item[itemIngredient] === null || item[itemIngredient].length === 0) {
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
        JSON.stringify({ ...getLocal, cocktails: { ...getLocal.cocktails, ...objeto } }));
    }
    saveInLocal();
  }, [checkArray, id]);

  const RedirectToRecipesMade = () => {
    const dateNow = new Date();
    const formatDate = `${dateNow}`.split(' GMT')[0];
    const objToSave = drinkInfo.map((item) => {
      let tagFormat;
      if (item.strTags) {
        tagFormat = item.strTags.split(', ');
      } else {
        tagFormat = [];
      }
      const obj = {
        id: item.idDrink,
        type: 'bebida',
        area: '',
        category: item.strCategory,
        alcoholicOrNot: item.strAlcoholic,
        name: item.strDrink,
        image: item.strDrinkThumb,
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
  // Risca o ingrediente
  const riskCompleteds = ({ target: { value, checked } }, index) => {
    if (checked) {
      setCheckArray([...checkArray, index]);
    }

    const labelCheckbox = document.querySelectorAll('.label-checkbox');
    labelCheckbox.forEach((inputs) => {
      if (inputs.textContent === value) {
        inputs.classList.toggle('texto-riscado');
      }
    });
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

  const handleFavorite = () => {
    const objSave = drinkInfo.map((item) => {
      const obj = {
        id: item.idDrink,
        type: 'bebida',
        area: '',
        category: item.strCategory,
        alcoholicOrNot: item.strAlcoholic,
        name: item.strDrink,
        image: item.strDrinkThumb,
      };
      return obj;
    })[0];
    handleFavoriteAuxiliar(objSave, setIcon, icon);
  };

  return (
    <div className="recipes-container">
      { drinkInfo.map((drink) => {
        const allDrink = (
          <div key={ drink.idDrink }>
            <img
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
              data-testid="recipe-photo"
              width="250px"
            />
            <h1 data-testid="recipe-title">{ drink.strDrink }</h1>
            <h2 data-testid="recipe-category">{ drink.strCategory }</h2>
            <p>{ link }</p>
            <button type="button" data-testid="share-btn" onClick={ handleLinks }>
              <img src={ shareImage } alt="botao-compartilhar" />
            </button>
            <button type="button" onClick={ handleFavorite }>
              <img src={ icon } alt="icone-de-favoritar" data-testid="favorite-btn" />
            </button>
            <p data-testid="instructions">{ drink.strInstructions }</p>
          </div>
        );
        return allDrink;
      }) }
      <div className="recipes-checkbox">
        <ul>
          { ingredients.map(({ strMeasure, strIngredient }, i) => {
            const ingrID = `${i}-ingredient-step`;
            return (
              <li key={ i }>
                <label
                  data-testid={ ingrID }
                  htmlFor={ i }
                  className={ (
                    checkArray.includes(i)
                      ? 'inputs-checkbox texto-riscado'
                      : 'inputs-checkbox') }
                >
                  <input
                    onChange={ verifyChecked }
                    checked={ checkArray.includes(i) }
                    className="inputs-checkbox"
                    id={ i }
                    type="checkbox"
                    value={ `${strMeasure} ${strIngredient}` }
                    onClick={ (e) => riskCompleteds(e, i) }
                  />
                </label>
                { ` ${strMeasure} ${strIngredient}` }
              </li>
            );
          }) }
        </ul>
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ disable }
        onClick={ RedirectToRecipesMade }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default DrinkInProgress;
