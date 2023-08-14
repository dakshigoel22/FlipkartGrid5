import './assets/css/style-prefix.css';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import CategoryMenu from './Header/CategoryMenu/CategoryMenu';
import Header from './Header/Header';
import ProductCategories from './ProductCategories/ProductCategories';
import ProductGrid from './ProductGrid/ProductGrid';
import { Route, Routes } from "react-router-dom";
import Profile from './Profile/Profile';
import Favourites from './Favourites/Favourites';
import Cart from './Cart/Cart';

function App() {
  return (
    <div className="App">
      <div class="overlay" data-overlay></div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <CategoryMenu />
            <Banner />
            <ProductCategories />
            <ProductGrid />
            <Blogs />
            <Footer />
          </>
        } />

        <Route path="/cart" element={<Cart />} />

        <Route path="/favourites" element={<Favourites />} />

        <Route path="/profile" element = {<Profile />} />
      </Routes>
    </div>
  );
}


export default App;
