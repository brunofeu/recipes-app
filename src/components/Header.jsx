// - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, showSearchBtn = false }) {
  const history = useHistory();
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={ () => history.push('/perfil') }
      >
        <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
      </button>
      <h1 data-testid="page-title">{title}</h1>
      { showSearchBtn && (
        <button
          type="button"
          onClick={ () => setShowSearchBar(!showSearchBar) }
        >
          <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
        </button>
      )}
      { showSearchBar && <SearchBar /> }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchBtn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Header;
