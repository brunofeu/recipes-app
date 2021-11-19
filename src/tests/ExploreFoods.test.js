import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import ExploreMenu from '../pages/Explore/ExploreMenu';
import { fireEvent } from '@testing-library/dom';
// import { screen, fireEvent } from '@testing-library/dom';

const EMAIL_TEST_ID = 'email-input';
const PASSWORD_TEST_ID = 'password-input';
const LOGIN_BTN_TEST_ID = 'login-submit-btn';
const MOCK_EMAIL = 'alguem@alguem.com';
const EXPLORE_BOTTON_BTN = 'explore-bottom-btn';
const EXPLORE_FOOD = 'explore-food';

// const EXPLORE_PAGE_PATH = '/explorar/comidas';

describe('Realiza todos os testes da página de Explorar comidas', () => {
  it('O header é renderizado corretamente', () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    console.log(window.location.pathname);
    // fireEvent.type(getByTestId(EMAIL_TEST_ID), MOCK_EMAIL);
    fireEvent.change(getByTestId(EMAIL_TEST_ID), { target: { value: MOCK_EMAIL } });
    // fireEvent.type(getByTestId(PASSWORD_TEST_ID), '1234567');
    fireEvent.change(getByTestId(PASSWORD_TEST_ID), { target: { value: 1234567 } });
    fireEvent.click(getByTestId(LOGIN_BTN_TEST_ID));
    fireEvent.click(getByTestId(EXPLORE_BOTTON_BTN));
    fireEvent.click(getByTestId(EXPLORE_FOOD));

    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('page-title')).toHaveTextContent(/Explorar Comidas/i);
  });
  // expect(history.location.pathname).toBe('/explorar/comidas');

  // const exploreByIngredientBtn = getByTestId('explore-by-ingredient');
  // expect(exploreByIngredientBtn).toBeInTheDocument();
  // expect(exploreByIngredientBtn).toHaveTextContent('Por Ingredientes');
  // expect(getByTestId('page-title')).toHaveTextContent('Explorar Comidas');
  it('Os botões da página são renderizados corretamente ', () => {
    const { history } = renderWithRouter(<App />);
    console.log(window.location.pathname);
    // userEvent.type(getByTestId(EMAIL_TEST_ID), MOCK_EMAIL);
    // userEvent.type(getByTestId(PASSWORD_TEST_ID), '1234567');
    // userEvent.click(getByTestId(LOGIN_BTN_TEST_ID));
    // userEvent.click(getByTestId(EXPLORE_BOTTON_BTN));
    // userEvent.click(getByTestId(EXPLORE_FOOD));

    //   expect(getByTestId('explore-by-ingredient')).toBeInTheDocument();
    //   expect(getByTestId('explore-by-area')).toBeInTheDocument();
    //   expect(getByTestId('explore-surprise')).toBeInTheDocument();
    //   userEvent.click(getByTestId('explore-by-ingredient'));
    //   console.log(history)
    //   // expect(history.location.pathname).toBe('/explorar/comidas');
  });

  // it('Testa botão de busca por ingrediente', () => {
  //   const { getByTestId, history } = renderWithRouter(<App />);

  //   userEvent.type(getByTestId(EMAIL_TEST_ID), MOCK_EMAIL);
  //   userEvent.type(getByTestId(PASSWORD_TEST_ID), '1234567');
  //   userEvent.click(getByTestId(LOGIN_BTN_TEST_ID));

  //   history.push(EXPLORE_PAGE_PATH);

  //   const exploreByIngredientBtn = getByTestId('explore-by-ingredient');

  //   expect(exploreByIngredientBtn).toBeInTheDocument();
  //   expect(exploreByIngredientBtn).toHaveTextContent('Por Ingredientes');

  //   userEvent.click(exploreByIngredientBtn);

  //   expect(history.location.pathname).toBe('/explorar/comidas/ingredientes');
  // });

  // it('Testa botão de busca por local de origem', () => {
  //   const { getByTestId, history } = renderWithRouter(<ExploreFoods />);

  //   userEvent.type(getByTestId(EMAIL_TEST_ID), MOCK_EMAIL);
  //   userEvent.type(getByTestId(PASSWORD_TEST_ID), '1234567');
  //   userEvent.click(getByTestId(LOGIN_BTN_TEST_ID));

  //   history.push(EXPLORE_PAGE_PATH);

  //   const exploreByAreaBtn = getByTestId('explore-by-area');

  //   expect(exploreByAreaBtn).toBeInTheDocument();
  //   expect(exploreByAreaBtn).toHaveTextContent('Por Local de Origem');

  //   userEvent.click(exploreByAreaBtn);

  //   expect(history.location.pathname).toBe('/explorar/comidas/area');
  // });

  // it('Testa botão de receita aleatória', () => {
  //   const { getByTestId, history } = renderWithRouter(<ExploreFoods />);

  //   userEvent.type(getByTestId(EMAIL_TEST_ID), MOCK_EMAIL);
  //   userEvent.type(getByTestId(PASSWORD_TEST_ID), '1234567');
  //   userEvent.click(getByTestId(LOGIN_BTN_TEST_ID));

  //   history.push(EXPLORE_PAGE_PATH);

  //   const exploreSurpriseBtn = getByTestId('explore-surprise');

  //   expect(exploreSurpriseBtn).toBeInTheDocument();
  //   expect(exploreSurpriseBtn).toHaveTextContent('Me Surpreenda!');

  //   userEvent.click(exploreSurpriseBtn);

  //   expect(history.location.pathname).toBe('/comidas/');
  // });
});
