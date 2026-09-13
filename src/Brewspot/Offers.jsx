import React from "react";
import {  FiGift, FiArrowRight } from "react-icons/fi";
import "./Offers.css";

function Offers() {
  const offers = [
    {
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
      tag: "COFFEE SPECIAL",
      title: "Buy 2 Get 1 Free",
      text: "Enjoy your favorite handcrafted coffees with friends and get one coffee free.",
      offer: "BUY 2 • GET 1 FREE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
      tag: "WEEKEND SPECIAL",
      title: "Coffee & Croissant",
      text: "Pair your favorite coffee with a freshly baked croissant at a special price.",
      offer: "SPECIAL COMBO",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
      tag: "HAPPY HOURS",
      title: "20% Off Your Coffee",
      text: "Drop by during our happy hours and enjoy 20% off selected coffee drinks.",
      offer: "20% OFF",
    },
  ];

  const scrollToMenu = () => {
    const section = document.getElementById("menu");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="brewspot-offers" id="offers">
      <div className="container">

        {/* Heading */}
        <div className="brewspot-offers-heading text-center">
          <span className="brewspot-offers-label">
            <FiGift />
            SPECIAL OFFERS
          </span>

          <h2>
            Something Special
            <br />
            <span>For Every Coffee Lover.</span>
          </h2>

          <p>
            Good coffee becomes even better with a little extra.
            Discover our latest specials and enjoy more of what you love.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="row g-4">
          {offers.map((offer, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
            >
              <div className="brewspot-offer-card">

                {/* Image */}
                <div className="brewspot-offer-image">
                  <img
                    src={offer.image}
                    alt={offer.title}
                  />

                  {/* Offer Tag - Top Left */}
                  <span className="brewspot-offer-tag">
                    {offer.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="brewspot-offer-content">

                  <h3>{offer.title}</h3>

                  <p>{offer.text}</p>

                  <div className="brewspot-offer-bottom">

                    <strong>{offer.offer}</strong>

                    <button onClick={scrollToMenu}>
                      Explore
                      <FiArrowRight />
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Offers;