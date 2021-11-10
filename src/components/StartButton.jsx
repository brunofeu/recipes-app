import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function StartButton({ location }) {
  const history = useHistory();
  return (
    <div>
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`${location}/in-progress`) }
      >
        Iniciar Receita
      </button>
    </div>
  );
}

StartButton.propTypes = {
  location: PropTypes.string.isRequired,
};

export default StartButton;
