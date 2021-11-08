import React from 'react';

function Login() {
  // const { email, setEmail } = useState('');
  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          data-testid="email-input"
          id="email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          data-testid="password-input"
          id="password"
        />
      </label>
      <button type="button" data-testid="login-submit-btn" disabled="true">
        Entrar
      </button>
    </form>
  );
}

export default Login;
