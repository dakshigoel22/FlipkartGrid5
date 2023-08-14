/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Cart.css";

import product1 from "../assets/images/products/1.jpg";
import product2 from "../assets/images/products/2.jpg";
import product3 from "../assets/images/products/3.jpg";
import product4 from "../assets/images/products/4.jpg";
import Button from '@mui/material/Button';

function Cart() {
  return <div className="container">
    <h2>Your Cart</h2>
    <div className="sidebar" style={{"width": "100%"}}>
      <div class="showcase-container">
        <div class="showcase">
          <div className="metadata">
            <a href="#" class="showcase-img-box">
              <img src={product1} alt="baby fabric shoes" width="75" height="75"
                class="showcase-img" />
            </a>

            <div class="showcase-content">

              <a href="#">
                <h4 class="showcase-title">baby fabric shoes</h4>
              </a>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>

              <div class="price-box">
                <del>$5.00</del>
                <p class="price">$4.00</p>
              </div>

            </div>
          </div>
          <div className="">
            <Button variant="outlined" color="error">
              Remove
            </Button>
          </div>

        </div>

        <div class="showcase">

          <a href="#" class="showcase-img-box">
            <img src={product2} alt="men's hoodies t-shirt" class="showcase-img"
              width="75" height="75" />
          </a>

          <div class="showcase-content">

            <a href="#">
              <h4 class="showcase-title">men's hoodies t-shirt</h4>
            </a>
            <div class="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
            </div>

            <div class="price-box">
              <del>$17.00</del>
              <p class="price">$7.00</p>
            </div>

          </div>

        </div>

        <div class="showcase">

          <a href="#" class="showcase-img-box">
            <img src={product3} alt="girls t-shirt" class="showcase-img" width="75"
              height="75" />
          </a>

          <div class="showcase-content">

            <a href="#">
              <h4 class="showcase-title">girls t-shirt</h4>
            </a>
            <div class="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
            </div>

            <div class="price-box">
              <del>$5.00</del>
              <p class="price">$3.00</p>
            </div>

          </div>

        </div>

        <div class="showcase">

          <a href="#" class="showcase-img-box">
            <img src={product4} alt="woolen hat for men" class="showcase-img" width="75"
              height="75" />
          </a>

          <div class="showcase-content">

            <a href="#">
              <h4 class="showcase-title">woolen hat for men</h4>
            </a>
            <div class="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>

            <div class="price-box">
              <del>$15.00</del>
              <p class="price">$12.00</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>;
}

export default Cart;