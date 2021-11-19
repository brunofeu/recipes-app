import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    <form>
      <label htmlFor="email">
        Email:
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
        Senha:
        <input
          name="password"
          type="password"
          data-testid="password-input"
          id="password"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleSubmit }
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
