import jacket3 from "../assets/images/products/jacket-3.jpg";

import "./Favourites.css";

function Favourites() {
  return <>
    <div class="product-box">
      <div class="favourites">

        <h2 class="title">Your favourites</h2>

        <div class="product-grid">

          <div class="showcase">

            <div class="showcase-banner">

              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />

              <div class="showcase-actions">

                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>

              </div>

            </div>

            <div class="showcase-content">

              <a href="#" class="showcase-category">Brand</a>

              <a href="#">
                <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>


          <div class="showcase">

            <div class="showcase-banner">

              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />

              <div class="showcase-actions">

                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>

              </div>

            </div>

            <div class="showcase-content">

              <a href="#" class="showcase-category">Brand</a>

              <a href="#">
                <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>


          <div class="showcase">

            <div class="showcase-banner">

              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />

              <div class="showcase-actions">

                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>

              </div>

            </div>

            <div class="showcase-content">

              <a href="#" class="showcase-category">brand</a>

              <a href="#">
                <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">

            <div class="showcase-banner">

              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img default" />
              <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />

              <div class="showcase-actions">

                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>

              </div>

            </div>

            <div class="showcase-content">

              <a href="#" class="showcase-category">Brand</a>

              <a href="#">
                <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Favourites;