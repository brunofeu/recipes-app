import React from 'react';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  return (
    <div>
      <button
        type="button"
      >
        <img
          src={ shareIcon }
          alt="botão compartilhar"
          data-testid="share-btn"
        />
      </button>
    </div>
  );
}

export default ShareButton;
