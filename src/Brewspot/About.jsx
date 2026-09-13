import React from "react";
import { FiCoffee, FiHeart, FiAward } from "react-icons/fi";
import "./About.css";

function About() {
  return (
    <section className="brewspot-about" id="about">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-6">
            <div className="brewspot-about-image">
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
                alt="Brewspot Coffee Shop"
              />

              <div className="brewspot-about-badge">
                <FiCoffee />
                <div>
                  <strong>Since 2018</strong>
                  <span>Crafting Coffee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="brewspot-about-content">

              <div className="brewspot-about-label">
                <span></span>
                OUR STORY
              </div>

              <h2>
                More Than Just
                <br />
                <span>Coffee.</span>
              </h2>

              <p className="brewspot-about-intro">
                At Brewspot, we believe coffee is more than a drink.
                It is a moment to slow down, connect, and enjoy the
                little things in life.
              </p>

              <p>
                From carefully selected beans to every handcrafted cup,
                we put passion and care into everything we serve.
                Our cozy space is designed to make every visit feel
                warm, comfortable, and memorable.
              </p>

              {/* Highlights */}
              <div className="brewspot-about-highlights">

                <div className="brewspot-about-highlight">
                  <div className="brewspot-about-icon">
                    <FiCoffee />
                  </div>

                  <div>
                    <strong>Premium Beans</strong>
                    <span>Carefully selected quality</span>
                  </div>
                </div>

                <div className="brewspot-about-highlight">
                  <div className="brewspot-about-icon">
                    <FiHeart />
                  </div>

                  <div>
                    <strong>Made With Love</strong>
                    <span>Crafted with passion</span>
                  </div>
                </div>

                <div className="brewspot-about-highlight">
                  <div className="brewspot-about-icon">
                    <FiAward />
                  </div>

                  <div>
                    <strong>Quality First</strong>
                    <span>Always fresh & delicious</span>
                  </div>
                </div>

              </div>

              <button
                className="brewspot-about-btn"
                onClick={() => {
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Discover Our Menu
                <span>→</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;