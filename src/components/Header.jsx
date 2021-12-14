import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

import '../styles/Header.css';
import RecipeContext from '../context/RecipeContext';

function Header({ title, showSearchBtn = false }) {
  const history = useHistory();
  const { showSearchBar, setShowSearchBar } = useContext(RecipeContext);

  return (
    <header>
      <div className="header">
        <button
          className="header-button"
          type="button"
          onClick={ () => history.push('/perfil') }
        >
          <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
        </button>
        <h1 className="page-title" data-testid="page-title">{title}</h1>
        { showSearchBtn && (
          <button
            className="header-button"
            type="button"
            onClick={ () => setShowSearchBar(!showSearchBar) }
          >
            <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
          </button>
        )}
      </div>
      { showSearchBar && <SearchBar /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchBtn: PropTypes.bool.isRequired,
};

export default Header;
