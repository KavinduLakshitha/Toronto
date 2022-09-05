import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <a class="navbar-brand" href="/home">
        <img
          src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1661958029/Toronto%20Cupcakes/Toronto_Cupcakes_nnntsl.png"
          width="auto"
          className="logo"
          alt=""
        />
      </a>
      <div className="cart">
        <span class="navbar-text">
          <button className="button button-cart">
            <i class="fa-solid fa-cart-shopping"></i>
            {/* <span className="button button-text">Cart</span> */}
          </button>
        </span>
      </div>

      <button
        class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="/home"
              spy={true}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Home
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cupcakes
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Always Available
              </a>
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Holidays
              </a>
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Special Events
              </a>
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Custom
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              spy={true}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              Connect
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              spy={true}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="#"
              spy={true}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              FAQs
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Corporate Events
              </a>
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Occasions
              </a>
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Community
              </a>
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Resources
              </a>
              <a
                class="dropdown-item"
                href="#"
                spy={true}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Cupcake Delivery
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
