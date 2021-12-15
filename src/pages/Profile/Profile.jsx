import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import profileIcon from '../../images/profileIcon.svg';

import '../../styles/Profile.css';

function Profile() {
  if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify([]));
  }
  const localEmail = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();
    history.push('/recipes-app/');
  };

  return (
    <div>
      <Header title="Perfil" />
      <div className="profile-container">
        <img src={ profileIcon } alt="profile" className="profile-img" />
        <h3 data-testid="profile-email">{localEmail.email}</h3>
        <div className="profile-btn-container">
          <button
            className="profile-btn"
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/recipes-app/receitas-feitas') }
          >
            Receitas Feitas
          </button>
          <button
            className="profile-btn"
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/recipes-app/receitas-favoritas') }
          >
            Receitas Favoritas
          </button>
          <button
            className="profile-btn sair-btn"
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
