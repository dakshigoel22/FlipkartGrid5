import { useParams } from "react-router-dom";
import "./Product.css";
import product1 from "../assets/images/products/1.jpg";

function Product() {
  const params = useParams();

  return <>
    <div className="product-content">
      <div className="product-image">
        <img src={product1} width="100%" alt="product" />
      </div>
      <div className="product-details">
        <div className="product-brand">Allen Solly</div>
        <div className="product-title">Mens Winter Leathers Jackets</div>
        <div className="product-rating">
          {Array.from({ length: 3 }, (value, index) => <ion-icon name="star"></ion-icon> )}
          {Array.from({ length: 5 - 3 }, (value, index) => <ion-icon name="star-outline"></ion-icon> )}
        </div>
        <div className="product-price-box">
          <div className="product-price">$7.00</div>
          <del>$11.00</del>
        </div>
        <div className="product-description-title">Description:</div>
        <div className="product-description">
          Elevate your style with this classy pair of Running shoe from the house of BLACKTOWN brand. Featuring a Contemporary refined design with exceptional comfort, this pair is perfect to give your Quintessential dressing an Upgrade. <br />
          Sole: Rubber
          Closure: Pull On
          Fit Type: Regular
          Shoe Width: Medium
          Sole : Eva, Upper Material-Mesh Fabric Upper<br />
          Lifestyle: Sports Shoes, Running Shoes , Casual Shoes <br /> Warranty Type: Manufacturer<br />
          Care Instructions: Rotate Your Pair Of Shoes Once Every Other Day, Allowing Them To De-Odorize And Retain Their Shapes.
          <br /> Dust Any Dry Dirt From The Surface Using A Clean Cloth.<br />
          Product Colour May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings.<br />
          Age Range Description: Adult<br />
          Department Name: Mens <br />
          Toe Style: Round Toe
        </div>
      </div>
    </div>

    <div className="product-reviews">
      <h3>Reviews</h3>

      <div className="product-review">
        <div className="product-review-header">
          <div className="product-review-author">Ashutosh Chauhan</div>
          <div className="product-review-timestamp">Reviewed on Aug 15, 2:30 AM</div>
        </div>
        <div className="product-review-description">
          Monitor looks good and less amount of backlight bleeding like patches

          Even though sides look like bezeless but bezel is there under display

          If it having some speaker it would be more comfortable

          Usb port marked and taped as service only

          Power cord seems ok

          Picture quality is good as mentioned and I'm happy with the quality of picture and contrast

          Button is joystick below and seems to be working fine

          No software interface driver for changing setting under windows only have to use joystick button to operate and change things

          Refresh rate 144hz not seems a game changer with this big panel as compared to mobiles

          144 hz refresh rate working anyway
        </div>
      </div>
    </div>
  </>;
}

export default Product;