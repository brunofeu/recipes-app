import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Drinks() {
  return (
    <>
      <div>
        <Header title="Bebidas" showSearchBtn="true" />
        Drinks
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Drinks;
