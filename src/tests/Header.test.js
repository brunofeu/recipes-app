import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o Header da aplicação', () => {
  it('Verifica os testid dos componentes', () => {
    renderWithRouter(<App />);

    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();

    const searchBtn = screen.getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  });

  test('Verifica o Header em todas as Rotas', () => {
    const { history } = renderWithRouter(<App />);

    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).not.toBeInTheDocument();

    history.push('/comidas');

    expect(profileBtn).toBeInTheDocument();
  });
});
