/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import "./Header.css";
import { useSelector } from "react-redux";
import LLMOutput from "../LLMOutput/LLMOutput";
import { useState } from "react";

function Header() {

  const favourites = useSelector(store => store.favourites);
  const cartItems = useSelector(store => store.cart);

  const [ showLLMOutput, setShowLLMOutput ] = useState(false);

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

        <button className="llm-output-toggle" onClick={
          (e) => {
            setShowLLMOutput(!showLLMOutput);
          }
        }>
          { !showLLMOutput && <ion-icon name="chevron-down-outline"></ion-icon> }
          { showLLMOutput && <ion-icon name="chevron-up-outline"></ion-icon> }
        </button>

        <div class="header-user-actions">

          <Link to={"/profile"} class="action-btn">
            <ion-icon name="person-outline"></ion-icon>
          </Link>

          <Link to={"favourites"} class="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span class="count">{ favourites.length }</span>
          </Link>

          <Link to={"/cart"} class="action-btn" >
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span class="count">{ cartItems.length }</span>
          </Link>

        </div>

      </div>

      { showLLMOutput && <LLMOutput /> }

    </div>
  </header>;
}

export default Header;