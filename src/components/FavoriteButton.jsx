import React from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton() {
  return (
    <div>
      <button
        type="button"
      >
        <img
          src={ whiteHeartIcon }
          alt="botão favoritar"
          data-testid="favorite-btn"
        />
      </button>
    </div>
  );
}

export default FavoriteButton;
