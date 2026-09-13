import React from "react";
import {
  FiFeather,
  FiClock,
  FiCheckCircle,
  FiHome,
  FiArrowUpRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./OurStory.css";

const OurStory = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FiFeather />,
      title: "Fresh Ingredients",
    },
    {
      icon: <FiClock />,
      title: "Fast Delivery",
    },
    {
      icon: <FiCheckCircle />,
      title: "100% Authentic Taste",
    },
    {
      icon: <FiHome />,
      title: "Premium Quality",
    },
  ];

  const goToMenu = () => {
    navigate("/menu");

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <section className="brewspot-story" id="our-story">
      <div className="brewspot-story-container">
        {/* ================= LEFT CONTENT ================= */}

        <div className="brewspot-story-content">
          <span className="brewspot-story-eyebrow">
            OUR STORY • BREWSPOT
          </span>

          <h2 className="brewspot-story-title">
            GOOD FOOD.
            <br />
            <span>GOOD LIFE.</span>
          </h2>

          <p className="brewspot-story-description">
            At Brewspot, every cup, every plate and every
            moment is created with care. We believe great
            food brings people together and good coffee
            makes every moment better.
          </p>

          {/* ================= FEATURES ================= */}

          <div className="brewspot-story-features">
            {features.map((feature, index) => (
              <div
                className="brewspot-story-feature"
                key={index}
              >
                <div className="brewspot-story-icon">
                  {feature.icon}
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <span>Made with care</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= IMAGE AREA ================= */}

        <div className="brewspot-story-visual">
          {/* Main Image */}

          <div className="brewspot-story-main-image">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=90"
              alt="Brewspot cafe interior"
            />
          </div>

          {/* Small Image */}

          <div className="brewspot-story-small-image">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=700&q=90"
              alt="Brewspot coffee space"
            />
          </div>

          {/* Explore Menu Button */}

          <button
            type="button"
            className="brewspot-story-order"
            onClick={goToMenu}
          >
            <span>Explore Menu</span>
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;