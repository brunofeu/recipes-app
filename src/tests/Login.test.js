import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const SUBMIT_BTN = 'login-submit-btn';

describe('Testa a tela de Login', () => {
  it('Verifica que existe um imput para o email', () => {
    renderWithRouter(<App />);

    const email = screen.getByTestId(EMAIL_INPUT);
    expect(email).toBeInTheDocument();
  });

  it('Verifica que existe um input para a senha', () => {
    renderWithRouter(<App />);

    const password = screen.getByTestId(PASSWORD_INPUT);
    expect(password).toBeInTheDocument();
  });

  it('Verifica que existe um botao de "Entrar"', () => {
    renderWithRouter(<App />);

    const entrarBtn = screen.getByTestId(SUBMIT_BTN);
    expect(entrarBtn).toBeInTheDocument();
    expect(entrarBtn).toHaveTextContent('Entrar');
  });

  it('Verifica se o botão atende as validações', () => {
    renderWithRouter(<App />);

    const password = screen.getByTestId(PASSWORD_INPUT);
    const email = screen.getByTestId(EMAIL_INPUT);
    const entrarBtn = screen.getByTestId(SUBMIT_BTN);

    fireEvent.change(password, { target: { value: '123456' } });
    expect(entrarBtn).toBeDisabled();
    fireEvent.change(password, { target: { value: '12345678' } });
    fireEvent.change(email, { target: { value: 'trybe@gmail.com' } });
    expect(entrarBtn).not.toBeDisabled();
  });

  it('Verifica se depois de apertar o botão redireciona para a pagina de Food', () => {
    renderWithRouter(<App />);

    const email = screen.getByTestId(EMAIL_INPUT);
    fireEvent.change(email, { target: { value: 'teste@gmail.com' } });
    const password = screen.getByTestId(PASSWORD_INPUT);
    fireEvent.change(password, { target: { value: '12345678' } });

    const entrarBtn = screen.getByTestId(SUBMIT_BTN);
    fireEvent.click(entrarBtn);

    expect(window.location.pathname).toBe('/comidas');
  });
});
