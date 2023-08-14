import { useDispatch, useSelector } from "react-redux";

import "./Favourites.css";
import { removeFavourite } from "../store/favourites/favourites";
import { addToCart } from "../store/cart/cartSlice";
import { Link } from "react-router-dom";

function Favourites() {
  const favourites = useSelector(store => store.favourites);
  const dispatch = useDispatch();

  return <>
    <div class="product-box">
      <div class="favourites">

        <h2 class="title">Your favourites</h2>

        <div class="product-grid">

          { favourites.map((product, index) => <div className="showcase">

            <div class="showcase-banner">
              <Link to={'/product/' + product.id}>
                <img src={product.image} alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
                <img src={product.image} alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />
              </Link>

              <div class="showcase-actions">

                <button class="btn-action"
                  onClick={(e) => {
                    dispatch(removeFavourite(index))
                  }}>
                  <ion-icon name="heart-dislike-outline"></ion-icon>
                </button>

                <button class="btn-action" onClick={(e) => {
                  dispatch(addToCart(product));
                }}>
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>

              </div>

            </div>

            <div class="showcase-content">

              <div class="showcase-category">{ product.brand }</div>

              <Link to={'/product/' + product.id}>
                <h3 class="showcase-title">{ product.title }</h3>
              </Link>

              <div class="showcase-rating">
                {Array.from({ length: product.rating }, (value, index) => <ion-icon name="star"></ion-icon> )}
                {Array.from({ length: 5 - product.rating }, (value, index) => <ion-icon name="star-outline"></ion-icon> )}
              </div>

              <div class="price-box">
                <p class="price">${ product.discount_price }</p>
                <del>${ product.price }</del>
              </div>
            </div>
          </div> )}

        </div>
      </div>
    </div>
  </>;
}

export default Favourites;