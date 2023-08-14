/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { removeFromCart } from "../store/cart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector(store => store.cart)
  const dispatch = useDispatch();

  return <div className="container">
    <h2>Your Cart</h2>
    <div className="sidebar cart">
      <div class="showcase-container">

        { cartItems.map((item, index) => <div class="showcase">
          <div className="metadata">
            <Link to={'/product/' + item.id}>
              <a href="#" class="showcase-img-box">
                <img src={item.image} alt="baby fabric shoes" width="75" height="75"
                  class="showcase-img" />
              </a>
            </Link>

            <div class="showcase-content">
              <Link to={'/product/' + item.id}>
                <h3 class="cart-item-title">{ item.title }</h3>
              </Link>

              <div class="showcase-rating">
                {Array.from({ length: item.rating }, (value, index) => <ion-icon name="star"></ion-icon> )}
                {Array.from({ length: 5 - item.rating }, (value, index) => <ion-icon name="star-outline"></ion-icon> )}
              </div>

              <div class="price-box">
                <del>${ item.price }</del>
                <p class="price">${ item.discount_price }</p>
              </div>

            </div>
          </div>
          <div className="">
            <Button variant="outlined" color="error" onClick={(e) => dispatch(removeFromCart(index))}>
              Remove
            </Button>
          </div>

        </div>) }
      </div>
    </div>
  </div>;
}

export default Cart;