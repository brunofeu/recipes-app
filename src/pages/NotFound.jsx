import React from 'react';
import notFound from '../images/not-found.png';
import '../App.css';

function NotFound() {
  return (
    <main>
      <img className="page-404" src={ notFound } alt="page not found" />
    </main>
  );
}

export default NotFound;
