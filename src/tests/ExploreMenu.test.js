import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import ExploreMenu from '../pages/Explore/ExploreMenu';

describe('Testa a tela de Menu Explorar', () => {
  it('Verifica se os elementos estão na tela', () => {
    const { getByTestId } = renderWithRouter(<ExploreMenu />);
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('explore-food')).toBeInTheDocument();
    expect(getByTestId('explore-drinks')).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão Explorar Comidas é redirecionado', () => {
    const { getByTestId, history } = renderWithRouter(<ExploreMenu />);
    const exploreFoodBtn = getByTestId('explore-food');
    expect(exploreFoodBtn).toBeInTheDocument();
    userEvent.click(exploreFoodBtn);
    expect(history.location.pathname).toBe('/explorar/comidas');
  });
  it('Verifica se ao clicar no botão Explorar Bebidas é redirecionado', () => {
    const { getByTestId, history } = renderWithRouter(<ExploreMenu />);
    const exploreDrinkBtn = getByTestId('explore-drinks');
    expect(exploreDrinkBtn).toBeInTheDocument();
    userEvent.click(exploreDrinkBtn);
    expect(history.location.pathname).toBe('/explorar/bebidas');
  });
});
