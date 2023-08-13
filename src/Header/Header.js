/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from "../assets/images/logo/logo.jpg";
import CategoryMenu from "./CategoryMenu/CategoryMenu";

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

        <a href="#" class="header-logo">
          <img src={logo} alt="header icon"  height="80" />
        </a>

        <div class="header-search-container">

          <input type="search" name="search " class="search-field" placeholder="Enter your product name..." />

          <button class="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

        </div>

        <div class="header-user-actions">

          <button class="action-btn">
            <ion-icon name="person-outline"></ion-icon>
          </button>

          <button class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span class="count">0</span>
          </button>

          <button class="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span class="count">0</span>
          </button>

        </div>

      </div>

    </div>

    <CategoryMenu />
  </header>;
}

export default Header;