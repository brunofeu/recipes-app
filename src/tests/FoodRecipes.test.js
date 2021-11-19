import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import renderWithRouter from './renderWithRouter';
import App from '../App';
import FoodRecipes from '../pages/Foods/FoodRecipes';
import NotFound from '../pages/NotFound';
import {foodDetailsResponse} from '../mocks/mockFood';

describe('Testa a tela de Receitas de Comidas', () => {
  // it('verifica se os componentes estão na tela ', () => {
    // const { getByTestId, history } = renderWithRouter(<App />);
    // history.push("/ddd");
    // const foodName = screen.getByTestId('recipe-title');
    // expect(foodName).toBeInTheDocument();
    // const notFoundText = screen.getByText(/not found/i);
    // const email = screen.getByText(/email/i);
    // expect(notFoundText).toBeInTheDocument();
    // expect(email).toBeInTheDocument();

});
