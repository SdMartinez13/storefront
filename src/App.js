import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Categories from './components/Categories/categories';
import ProductList from './components/Categories/ProductList';


function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
