import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o Searchbar da aplicação', () => {
  it('Verifica os testid do componente', () => {
    renderWithRouter(<App />);

    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);

    const searchLabel = screen.getByTestId('search-input');
    expect(searchLabel).toBeInTheDocument();

    const ingredientBtn = screen.getByTestId('ingredient-search-radio');
    expect(ingredientBtn).toBeInTheDocument();

    const sameBtn = screen.getByTestId('name-search-radio');
    expect(sameBtn).toBeInTheDocument();

    const firstLetterBtn = screen.getByTestId('first-letter-search-radio');
    expect(firstLetterBtn).toBeInTheDocument();
  });
});
