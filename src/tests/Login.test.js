import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa a tela de Login', () => {
  it('Verifica que existe um imput para o email', () => {
    renderWithRouter(<App />);

    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();
  });

  it('Verifica que existe um imput para a senha', () => {
    renderWithRouter(<App />);

    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();
  });

  it('Verifica que existe um botao de "Entrar"', () => {
    renderWithRouter(<App />);

    const entrarBtn = screen.getByTestId('login-submit-btn');
    expect(entrarBtn).toBeInTheDocument();
    expect(entrarBtn).toHaveTextContent('Entrar');
  });
});
