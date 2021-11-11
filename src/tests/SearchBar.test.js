import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const SUBMIT_BTN = 'login-submit-btn';

describe('Testa o Searchbar da aplicação', () => {
  it('Verifica os testid do componente', () => {
    renderWithRouter(<App />);

    const email = screen.getByTestId(EMAIL_INPUT);
    fireEvent.change(email, { target: { value: 'teste@gmail.com' } });
    const password = screen.getByTestId(PASSWORD_INPUT);
    fireEvent.change(password, { target: { value: '12345678' } });

    const entrarBtn = screen.getByTestId(SUBMIT_BTN);
    fireEvent.click(entrarBtn);

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

  it('Verifica o nome de cada radio button', () => {
    renderWithRouter(<App />);

    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);

    const ingredientLabel = screen.getByText('Ingrediente');
    expect(ingredientLabel).toBeInTheDocument();

    const nameLabel = screen.getByText('Ingrediente');
    expect(nameLabel).toBeInTheDocument();

    const firstLetterLabel = screen.getByText('Ingrediente');
    expect(firstLetterLabel).toBeInTheDocument();
  });
});
