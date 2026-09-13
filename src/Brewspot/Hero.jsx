import React from "react";
import { FiArrowRight, FiCalendar, FiCoffee } from "react-icons/fi";
import "./Hero.css";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="brewspot-hero" id="home">
      <div className="brewspot-hero-overlay"></div>

      <div className="container">
        <div className="row align-items-center brewspot-hero-row">

          {/* Left Content */}
          <div className="col-lg-7 col-md-12">
            <div className="brewspot-hero-content">

              <div className="brewspot-hero-label">
                <FiCoffee />
                <span>PREMIUM COFFEE EXPERIENCE</span>
              </div>

              <h1>
                Where Every Sip
                <br />
                <span>Feels Like Home.</span>
              </h1>

              <p>
                Discover carefully crafted coffee, delicious bites,
                and cozy moments made especially for you.
              </p>

              <div className="brewspot-hero-buttons">

                <button
                  className="brewspot-primary-btn"
                  onClick={() => scrollToSection("menu")}
                >
                  Explore Menu
                  <FiArrowRight />
                </button>

                <button
                  className="brewspot-secondary-btn"
                  onClick={() => scrollToSection("contact")}
                >
                  <FiCalendar />
                  Book a Table
                </button>

              </div>

              <div className="brewspot-hero-features">
                <div>
                  <strong>Freshly Roasted</strong>
                  <span>Premium Beans</span>
                </div>

                <div className="brewspot-feature-line"></div>

                <div>
                  <strong>Hand Crafted</strong>
                  <span>Made With Care</span>
                </div>

                <div className="brewspot-feature-line"></div>

                <div>
                  <strong>Cozy Moments</strong>
                  <span>Made For You</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-5 col-md-12">
            <div className="brewspot-hero-card">

              <div className="brewspot-coffee-circle">
                <div className="brewspot-coffee-cup">
                  ☕
                </div>
              </div>

              <div className="brewspot-floating-card">
                <span>Today's Special</span>
                <strong>Signature Brew</strong>
                <small>Rich • Smooth • Aromatic</small>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="brewspot-scroll">
        <span></span>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}

export default Hero;