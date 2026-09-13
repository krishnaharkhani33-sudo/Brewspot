import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero-section">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <span className="hero-small-text">
            WELCOME TO BREWSPOT
          </span>

          <h1>
            Where Great Coffee
            <br />
            Meets Great Moments.
          </h1>

          <p>
            Discover a warm and welcoming café experience with
            handcrafted coffee, delicious food and the perfect
            place to relax, connect and enjoy your day.
          </p>

          <div className="hero-buttons">

            <button className="hero-btn primary-btn">
              Explore Menu
            </button>

            <button className="hero-btn secondary-btn">
              Reserve a Table
            </button>

          </div>

          {/* SMALL INFO */}
          <div className="hero-info">

            <div>
              <strong>4.8</strong>
              <span>Customer Rating</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Menu Options</span>
            </div>

            <div>
              <strong>7 AM</strong>
              <span>Open Daily</span>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">

          <div className="hero-image-card">

            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
              alt="BrewSpot Cafe"
            />

            <div className="hero-image-overlay">

              <span>☕</span>

              <div>
                <strong>Freshly Brewed</strong>
                <p>Made with passion</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;