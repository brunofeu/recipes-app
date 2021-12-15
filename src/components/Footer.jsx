import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

const Footer = () => (
  <footer data-testid="footer" className="fixedbottom">
    <Link
      to="/recipes-app/comidas"
    >
      <img
        src={ mealIcon }
        alt="meal"
        data-testid="food-bottom-btn"
      />
    </Link>

    <Link
      to="/recipes-app/bebidas"
    >
      <img
        src={ drinkIcon }
        alt="drinks"
        data-testid="drinks-bottom-btn"
      />
    </Link>
    <Link
      to="/recipes-app/explorar"
    >
      <img
        alt="explore"
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
      />
    </Link>
  </footer>
);
export default Footer;
