import React, { useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  const [linkCopy, setLinkCopy] = useState(false);

  const handleClick = () => {
    clipboardCopy(window.location.href);
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
      >
        <img
          src={ shareIcon }
          alt="botão compartilhar"
          data-testid="share-btn"
        />
      </button>
      { linkCopy && <p>Link copiado!</p> }
    </div>
  );
}

export default ShareButton;
