// - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`

import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, showSearchBtn = false }) {
  // const { title } = props;
  return (
    <div>
      <button type="button" data-testid="profile-top-btn">
        <img src={ profileIcon } alt="profile" />
      </button>
      <h1 data-testid="page-title">{title}</h1>
      { showSearchBtn && (
        <button type="button" data-testid="search-top-btn">
          <img src={ searchIcon } alt="searchIcon" />
        </button>
      )
      }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchBtn: PropTypes.bool.isRequired,
};

export default Header;
