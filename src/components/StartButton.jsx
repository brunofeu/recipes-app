import React from 'react';

function StartButton() {
  return (
    <div>
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </div>
  );
}

export default StartButton;
