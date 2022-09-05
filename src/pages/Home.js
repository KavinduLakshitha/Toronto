import React from "react";
import "./Home.css";
import Slider from "../components/Slider";

function Home() {
  return (
    <div className="container home">
      <Slider />
      <div className="home-viewcakes">
        <button type="button" class="btn btn-primary viewcakes">
          Order Now
        </button>
      </div>
      <div className="home__Products">
        <h1 className="home__ourProducts">Featured Products</h1>
      </div>

      <div className="content-wrap">
        <div className="row">
          <div className="col-md-4 p-3">
            <div className="thumbnail">
              <a href="#" target="_blank">
                <img
                  src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1662389136/Toronto%20Cupcakes/Holiday-Cupcakes-via-Bakers-Royale-735x1103_hjr7go.jpg"
                  alt="Holiday Cakes"
                  className="img-thumbnail"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="thumbnail">
              <a href="#" target="_blank">
                <img
                  src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1662389492/Toronto%20Cupcakes/moist-chocolate-cupcakes-5_eicnyx.jpg"
                  alt="Always available cakes"
                  className="img-thumbnail"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="thumbnail">
              <a href="#" target="_blank">
                <img
                  src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1662391018/Toronto%20Cupcakes/1fe473b4503a72bcfe6a982fff91d611_ciyffi.jpg"
                  alt="special event cupcakes"
                  className="img-thumbnail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="home-viewcakes">
        <button type="button" class="btn btn-primary viewcakes">
          Show All Cupcakes
        </button>
      </div>
    </div>
  );
}

export default Home;
