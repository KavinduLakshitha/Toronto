import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <footer className="text-center" text-white="true">
        <div style={{ marginTop: "10px" }}>
          <section className="sm-buttons">
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.facebook.com/torontocupcakes"
              role="button"
              data-mdb-ripple-color="white-50"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.instagram.com/_toronto.cupcakes_/"
              role="button"
              data-mdb-ripple-color="light"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://wa.me/877-334-9468"
              role="button"
              data-mdb-ripple-color="light"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.twitter.com/kavindulm98"
              role="button"
              data-mdb-ripple-color="light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.pinterest.com/torontocupcakes/"
              role="button"
              data-mdb-ripple-color="light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-pinterest-p"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.youtube.com/TorontoCupcakes"
              role="button"
              data-mdb-ripple-color="light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </section>
        </div>
        <div className="text-center text-white-50 p-3">
          Copyright © 2022 Toronto Cupcakes. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;
