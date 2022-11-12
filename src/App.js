import React from 'react';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Categories from './components/Categories/categories';
import CategoriesList from './components/Categories/ProductList';


function App() {
  return (
    <>
      <Header />
      <Categories />
      <CategoriesList />
      <Footer />
    </>
  );
}

export default App;
