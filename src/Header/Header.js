/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.jpg";
import "./Header.css";

function Header() {

  return <header>
    <div class="header-top">

      <div class="container">

        <ul class="header-social-container"></ul>

        <div class="header-alert-news">
          <p>
            <b>Free Shipping</b> This Week Order
          </p>
        </div>

        <div class="header-top-actions"></div>

      </div>

    </div>

    <div class="header-main">

      <div class="container">

        <Link to={"/"} class="header-logo">
          <img src={logo} alt="header icon"  height="80" />
        </Link>

        <div class="header-search-container">

          <input type="search" name="search" class="search-field" placeholder="How can I help you? - Llama 2" />

          <button class="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

        </div>

        <div class="header-user-actions">

          <Link to={"/profile"} class="action-btn">
            <ion-icon name="person-outline"></ion-icon>
          </Link>

          <Link to={"favourites"} class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span class="count">0</span>
          </Link>

          <Link to={"/cart"} class="action-btn" >
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span class="count">0</span>
          </Link>

        </div>

      </div>

    </div>
  </header>;
}

export default Header;