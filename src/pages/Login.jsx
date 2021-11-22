import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
/* import wallPaperFood from '../images/wallPaperFood.jpg'; */

import '../styles/Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const validadeEmailPassword = () => {
    const MIN_CHARACTERS_PASSWORD = 6;

    const testPassword = password.length > MIN_CHARACTERS_PASSWORD;
    const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);
    return testPassword && testEmail ? setDisabled(false) : setDisabled(true);
  };
  useEffect(() => {
    validadeEmailPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const handleSubmit = () => {
    const { history } = props;
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <>
      {/* <img src={ wallPaperFood } alt="wallPaper" /> */}
      <header>
        <h1>Bem Vindo ao App de Receitas !</h1>
      </header>
      <div className="login-div">
        <img src={ profileIcon } alt="user" width="100" height="100" />
        <h2 id="login-title">Login</h2>
        <form>
          <label htmlFor="email">
            <p>Email:</p>
            <input
              name="email"
              type="email"
              data-testid="email-input"
              id="email"
              value={ email }
              onChange={ (event) => setEmail(event.target.value) }
            />
          </label>
          <label htmlFor="password">
            <p>Senha:</p>
            <input
              name="password"
              type="password"
              data-testid="password-input"
              id="password"
              value={ password }
              onChange={ (event) => setPassword(event.target.value) }
            />
          </label>
          <div>
            <button
              id="login-button"
              type="button"
              data-testid="login-submit-btn"
              disabled={ disabled }
              onClick={ handleSubmit }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
