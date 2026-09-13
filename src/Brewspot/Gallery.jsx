import React from "react";
import {
  FiCamera,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  const navigate = useNavigate();

  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
      title: "Freshly Brewed",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
      title: "Cozy Atmosphere",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=900&q=85",
      title: "Coffee Moments",
    },
    {
      image:
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=85",
      title: "Brewspot Interior",
    },
    {
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
      title: "Iced Coffee",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85",
      title: "Perfect Morning",
    },
  ];

  const goToContact = () => {
    navigate("/contact");

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <section
      className="brewspot-gallery"
      id="gallery"
    >
      <div className="container">
        {/* ================= HEADING ================= */}

        <div className="brewspot-gallery-heading text-center">
          <span className="brewspot-gallery-label">
            <FiCamera />
            BREWSPOT GALLERY
          </span>

          <h2>
            Moments Worth
            <br />
            <span>Savoring.</span>
          </h2>

          <p>
            Take a little look inside Brewspot and
            discover the coffee, atmosphere, and
            moments that make every visit special.
          </p>
        </div>

        {/* ================= GALLERY ================= */}

        <div className="row g-4 brewspot-gallery-grid">
          {images.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
            >
              <div className="brewspot-gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="brewspot-gallery-overlay">
                  <span>{item.title}</span>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BUTTON ================= */}

        <div className="text-center brewspot-gallery-button-wrap">
          <button
            type="button"
            className="brewspot-gallery-btn"
            onClick={goToContact}
          >
            Visit Brewspot
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;