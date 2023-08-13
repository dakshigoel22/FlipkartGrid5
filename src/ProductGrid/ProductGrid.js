/* eslint-disable jsx-a11y/anchor-is-valid */

import Sidebar from "./Sidebar/Sidebar";

import clothes1 from "../assets/images/products/clothes-1.jpg";
import clothes2 from "../assets/images/products/clothes-2.jpg";
import clothes3 from "../assets/images/products/clothes-3.jpg";
import shirt1 from "../assets/images/products/shirt-1.jpg";
import jacket5 from "../assets/images/products/jacket-5.jpg";
import jacket1 from "../assets/images/products/jacket-1.jpg";
import jacket3 from "../assets/images/products/jacket-3.jpg";
import shorts1 from "../assets/images/products/shorts-1.jpg";
import sports1 from "../assets/images/products/sports-1.jpg";
import sports2 from "../assets/images/products/sports-2.jpg";
import sports3 from "../assets/images/products/sports-3.jpg";
import sports6 from "../assets/images/products/sports-6.jpg";
import partyWear1 from "../assets/images/products/party-wear-1.jpg";
import shoe3 from "../assets/images/products/shoe-3.jpg";
import shoe1 from "../assets/images/products/shoe-1.jpg";
import shoe2 from "../assets/images/products/shoe-2.jpg";

import watch3 from "../assets/images/products/watch-3.jpg";
import jewellery3 from "../assets/images/products/jewellery-3.jpg";
import perfume from "../assets/images/products/perfume.jpg";
import belt from "../assets/images/products/belt.jpg";
import jewellery2 from "../assets/images/products/jewellery-2.jpg";

import watch1 from "../assets/images/products/watch-1.jpg";
import shampoo from "../assets/images/products/shampoo.jpg";
import jewellery1 from "../assets/images/products/jewellery-1.jpg";

function ProductGrid() {
  return <div class="product-container">
    <div class="container">
      <Sidebar />

      <div class="product-box">
        <div class="product-minimal">

          <div class="product-showcase">

            <h2 class="title">New Arrivals</h2>

            <div class="showcase-wrapper has-scrollbar">

              <div class="showcase-container">

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={clothes1} alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                    </a>

                    <a href="#" class="showcase-category">Clothes</a>

                    <div class="price-box">
                      <p class="price">$45.00</p>
                      <del>$12.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={clothes2} alt="girls pink embro design top" class="showcase-img" width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Girls pnk Embro design Top</h4>
                    </a>

                    <a href="#" class="showcase-category">Clothes</a>

                    <div class="price-box">
                      <p class="price">$61.00</p>
                      <del>$9.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={clothes3} alt="black floral wrap midi skirt" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Black Floral Wrap Midi Skirt</h4>
                    </a>

                    <a href="#" class="showcase-category">Clothes</a>

                    <div class="price-box">
                      <p class="price">$76.00</p>
                      <del>$25.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={shirt1} alt="pure garment dyed cotton shirt" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                    </a>

                    <a href="#" class="showcase-category">Mens Fashion</a>

                    <div class="price-box">
                      <p class="price">$68.00</p>
                      <del>$31.00</del>
                    </div>

                  </div>

                </div>

              </div>

              <div class="showcase-container">

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={jacket5} alt="men yarn fleece full-zip jacket" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                    </a>

                    <a href="#" class="showcase-category">Winter wear</a>

                    <div class="price-box">
                      <p class="price">$61.00</p>
                      <del>$11.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={jacket1} alt="mens winter leathers jackets" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                    </a>

                    <a href="#" class="showcase-category">Winter wear</a>

                    <div class="price-box">
                      <p class="price">$32.00</p>
                      <del>$20.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={jacket3} alt="mens winter leathers jackets" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Mens Winter Leathers Jackets</h4>
                    </a>

                    <a href="#" class="showcase-category">Jackets</a>

                    <div class="price-box">
                      <p class="price">$50.00</p>
                      <del>$25.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={shorts1} alt="better basics french terry sweatshorts" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Better Basics French Terry Sweatshorts</h4>
                    </a>

                    <a href="#" class="showcase-category">Shorts</a>

                    <div class="price-box">
                      <p class="price">$20.00</p>
                      <del>$10.00</del>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="product-showcase">

            <h2 class="title">Trending</h2>

            <div class="showcase-wrapper  has-scrollbar">

              <div class="showcase-container">

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={sports1} alt="running & trekking shoes - white" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Running & Trekking Shoes - White</h4>
                    </a>

                    <a href="#" class="showcase-category">Sports</a>

                    <div class="price-box">
                      <p class="price">$49.00</p>
                      <del>$15.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={sports2} alt="trekking & running shoes - black" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Trekking & Running Shoes - black</h4>
                    </a>

                    <a href="#" class="showcase-category">Sports</a>

                    <div class="price-box">
                      <p class="price">$78.00</p>
                      <del>$36.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={partyWear1} alt="womens party wear shoes" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Womens Party Wear Shoes</h4>
                    </a>

                    <a href="#" class="showcase-category">Party wear</a>

                    <div class="price-box">
                      <p class="price">$94.00</p>
                      <del>$42.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={sports3} alt="sports claw women's shoes" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Sports Claw Women's Shoes</h4>
                    </a>

                    <a href="#" class="showcase-category">Sports</a>

                    <div class="price-box">
                      <p class="price">$54.00</p>
                      <del>$65.00</del>
                    </div>

                  </div>

                </div>

              </div>

              <div class="showcase-container">

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={sports6} alt="air tekking shoes - white" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Air Trekking Shoes - white</h4>
                    </a>

                    <a href="#" class="showcase-category">Sports</a>

                    <div class="price-box">
                      <p class="price">$52.00</p>
                      <del>$55.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={shoe3} alt="Boot With Suede Detail" class="showcase-img" width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Boot With Suede Detail</h4>
                    </a>

                    <a href="#" class="showcase-category">boots</a>

                    <div class="price-box">
                      <p class="price">$20.00</p>
                      <del>$30.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={shoe1} alt="men's leather formal wear shoes" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Men's Leather Formal Wear shoes</h4>
                    </a>

                    <a href="#" class="showcase-category">formal</a>

                    <div class="price-box">
                      <p class="price">$56.00</p>
                      <del>$78.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={shoe2} alt="casual men's brown shoes" class="showcase-img" width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Casual Men's Brown shoes</h4>
                    </a>

                    <a href="#" class="showcase-category">Casual</a>

                    <div class="price-box">
                      <p class="price">$50.00</p>
                      <del>$55.00</del>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="product-showcase">

            <h2 class="title">Top Rated</h2>

            <div class="showcase-wrapper  has-scrollbar">

              <div class="showcase-container">

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={watch3} alt="pocket watch leather pouch" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Pocket Watch Leather Pouch</h4>
                    </a>

                    <a href="#" class="showcase-category">Watches</a>

                    <div class="price-box">
                      <p class="price">$50.00</p>
                      <del>$34.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={jewellery3} alt="silver deer heart necklace" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Silver Deer Heart Necklace</h4>
                    </a>

                    <a href="#" class="showcase-category">Jewellery</a>

                    <div class="price-box">
                      <p class="price">$84.00</p>
                      <del>$30.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={perfume} alt="titan 100 ml womens perfume" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Titan 100 Ml Womens Perfume</h4>
                    </a>

                    <a href="#" class="showcase-category">Perfume</a>

                    <div class="price-box">
                      <p class="price">$42.00</p>
                      <del>$10.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={belt} alt="men's leather reversible belt" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Men's Leather Reversible Belt</h4>
                    </a>

                    <a href="#" class="showcase-category">Belt</a>

                    <div class="price-box">
                      <p class="price">$24.00</p>
                      <del>$10.00</del>
                    </div>

                  </div>

                </div>

              </div>

              <div class="showcase-container">

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={jewellery2} alt="platinum zircon classic ring" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">platinum Zircon Classic Ring</h4>
                    </a>

                    <a href="#" class="showcase-category">jewellery</a>

                    <div class="price-box">
                      <p class="price">$62.00</p>
                      <del>$65.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={watch1} alt="smart watche vital plus" class="showcase-img" width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Smart watche Vital Plus</h4>
                    </a>

                    <a href="#" class="showcase-category">Watches</a>

                    <div class="price-box">
                      <p class="price">$56.00</p>
                      <del>$78.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={shampoo} alt="shampoo conditioner packs" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">shampoo conditioner packs</h4>
                    </a>

                    <a href="#" class="showcase-category">cosmetics</a>

                    <div class="price-box">
                      <p class="price">$20.00</p>
                      <del>$30.00</del>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <a href="#" class="showcase-img-box">
                    <img src={jewellery1} alt="rose gold peacock earrings" class="showcase-img"
                      width="70" />
                  </a>

                  <div class="showcase-content">

                    <a href="#">
                      <h4 class="showcase-title">Rose Gold Peacock Earrings</h4>
                    </a>

                    <a href="#" class="showcase-category">jewellery</a>

                    <div class="price-box">
                      <p class="price">$20.00</p>
                      <del>$30.00</del>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        <div class="product-main">

          <h2 class="title">New Products</h2>

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
    </div>
  </div>;
}

export default ProductGrid;