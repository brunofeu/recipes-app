import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ testid, clipBoard }) {
  const [linkCopy, setLinkCopy] = useState(false);

  const handleClick = () => {
    clipboardCopy(clipBoard);
    setLinkCopy(true);
  };

  useEffect(() => {
    const TWO_SECONDS = 2000;
    setTimeout(() => setLinkCopy(false), TWO_SECONDS);
  }, [linkCopy]);

  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
        className="recipe-page-btn"
      >
        <img
          src={ shareIcon }
          alt="botão compartilhar"
          data-testid={ testid }
          className="favorite-btn-img"
        />
      </button>
      { linkCopy && <p>Link copiado!</p> }
    </div>
  );
}

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  clipBoard: PropTypes.string.isRequired,
};

export default ShareButton;
