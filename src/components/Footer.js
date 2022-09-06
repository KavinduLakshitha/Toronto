import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="container footer">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Toronto Cupcakes</span>
              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">FAQs</a>
              </li>

              <li>
                <a href="#">Terms & Conditions</a>
              </li>

              <li>
                <a href="#">Privacy Policy </a>
              </li>

              <li>
                <a href="#">Delivery & Collections</a>
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="social">
              <span>Follow Us</span>
              <li>
                <a
                  href="#"
                  role="button"
                  data-mdb-ripple-color="white-50"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  role="button"
                  data-mdb-ripple-color="light"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  role="button"
                  data-mdb-ripple-color="light"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  role="button"
                  data-mdb-ripple-color="light"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  role="button"
                  data-mdb-ripple-color="light"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  role="button"
                  data-mdb-ripple-color="light"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </li>
            </ul>
            <ul className="hours">
              <span>Open Hours</span>
              <li>Mon - Sat: 11am - 7pm</li>
              <li>Sundays: 12pm - 6pm</li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="adress">
              <span>Address</span>
              <li>
                <p>698 Victoria Park Ave Toronto, Ontario(ON), M4A 2M5</p>
              </li>

              <li>
                <p>+1 647-478-9464</p>
              </li>

              <li>
                <p>inquiry@torontocupcake.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        Copyright © 2022 Toronto Cupcakes. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
