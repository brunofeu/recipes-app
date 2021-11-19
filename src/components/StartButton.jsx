import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function StartButton({ location, inProgress = false, hidden = false }) {
  const history = useHistory();
  return (
    <div>
      <button
        hidden={ hidden }
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`${location}/in-progress`) }
      >
        {inProgress ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>
    </div>
  );
}

StartButton.propTypes = {
  location: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default StartButton;
