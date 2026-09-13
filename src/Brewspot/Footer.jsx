import React from "react";
import {
  FiCoffee,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import "./Footer.css";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="brewspot-footer">

      <div className="container">

        {/* Main Footer */}
        <div className="row g-5 brewspot-footer-main">

          {/* Brand */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="brewspot-footer-brand">

              <button
                className="brewspot-footer-logo"
                onClick={scrollToTop}
              >
                <span className="brewspot-footer-logo-icon">
                  <FiCoffee />
                </span>

                <span>Brewspot</span>
              </button>

              <p>
                Where every sip feels like home. Enjoy carefully crafted
                coffee, delicious bites, and cozy moments made especially
                for you.
              </p>

              {/* Social Icons */}
              <div className="brewspot-footer-socials">

                <a href="#instagram" aria-label="Instagram">
                  <FiInstagram />
                </a>

                <a href="#facebook" aria-label="Facebook">
                  <FiFacebook />
                </a>

                <a href="#twitter" aria-label="Twitter">
                  <FiTwitter />
                </a>

              </div>

            </div>
          </div>


          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-12">
            <div className="brewspot-footer-column">

              <h3>Quick Links</h3>

              <button onClick={() => scrollToSection("home")}>
                Home
              </button>

              <button onClick={() => scrollToSection("about")}>
                About Us
              </button>

              <button onClick={() => scrollToSection("menu")}>
                Our Menu
              </button>

              <button onClick={() => scrollToSection("gallery")}>
                Gallery
              </button>

              <button onClick={() => scrollToSection("offers")}>
                Offers
              </button>

              <button onClick={() => scrollToSection("reviews")}>
                Reviews
              </button>

            </div>
          </div>


          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="brewspot-footer-column">

              <h3>Opening Hours</h3>

              <div className="brewspot-footer-hours">
                <span>Monday - Friday</span>
                <strong>8:00 AM - 10:00 PM</strong>
              </div>

              <div className="brewspot-footer-hours">
                <span>Saturday - Sunday</span>
                <strong>9:00 AM - 11:00 PM</strong>
              </div>

              <div className="brewspot-footer-status">
                <span></span>
                <p>Open Today</p>
              </div>

            </div>
          </div>


          {/* Contact */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="brewspot-footer-column">

              <h3>Get In Touch</h3>

              <div className="brewspot-footer-contact">

                <FiMapPin />

                <p>
                  24 Coffee Street,
                  <br />
                  Ahmedabad, Gujarat
                </p>

              </div>

              <div className="brewspot-footer-contact">

                <FiPhone />

                <p>+91 98765 43210</p>

              </div>

              <div className="brewspot-footer-contact">

                <FiMail />

                <p>hello@brewspot.com</p>

              </div>

            </div>
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="brewspot-footer-bottom">

          <p>
            © {new Date().getFullYear()} Brewspot. All Rights Reserved.
          </p>

          <button
            className="brewspot-back-top"
            onClick={scrollToTop}
          >
            Back to Top
            <FiArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;