import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Food() {
  return (
    <>
      <div>
        <Header title="Comidas" showSearchBtn="true" />
        Food
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Food;
