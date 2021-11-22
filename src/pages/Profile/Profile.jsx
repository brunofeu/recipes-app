import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../styles/Profile.css';

function Profile() {
  if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify([]));
  }
  const localEmail = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Perfil" />
      <div className="menu-perfil">
        <h2 data-testid="profile-email">{localEmail.email}</h2>
        <div>
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/receitas-feitas') }
          >
            Receitas Feitas
          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/receitas-favoritas') }
          >
            Receitas Favoritas
          </button>
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleClick }
          >
            Sair
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
