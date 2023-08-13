import './assets/css/style-prefix.css';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ProductCategories from './ProductCategories/ProductCategories';
import ProductGrid from './ProductGrid/ProductGrid';

function App() {
  return (
    <div className="App">
      <div class="overlay" data-overlay></div>
      <Header />
      <Banner />

      <ProductCategories />
      <ProductGrid />

      <Blogs />

      <Footer />
    </div>
  );
}

export default App;
