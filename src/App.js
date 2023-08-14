import './App.css';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ProductCategories from './ProductCategories/ProductCategories';
import ProductGrid from './ProductGrid/ProductGrid';
import { Route, Routes } from "react-router-dom";
import Profile from './Profile/Profile';
import Favourites from './Favourites/Favourites';
import Cart from './Cart/Cart';
import Signin from './Signin/Signin';

import { useSelector } from "react-redux";
import Product from './Product/Product';

function App() {
  const token = useSelector(store => store.user.token);

  if (!token) return <Signin />

  return (
    <div className="App">
      <div class="overlay" data-overlay></div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            {/* <CategoryMenu /> */}
            {/* <Banner /> */}
            <ProductCategories />
            <ProductGrid />
            <Blogs />
            <Footer />
          </>
        } />

        <Route path="/cart" element={<Cart />} />

        <Route path="/favourites" element={<Favourites />} />

        <Route path="/profile" element = {<Profile />} />

        <Route path="/product/:id" element = {<Product />} />
      </Routes>
    </div>
  );
}


export default App;
