import React from "react";
import {
  FiStar,
  FiMessageCircle,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Aarav Patel",
      role: "Coffee Lover",
      review:
        "Brewspot has one of the best coffee experiences. The coffee is fresh, the place feels cozy, and the service is excellent.",
      rating: 5,
      initial: "A",
    },
    {
      name: "Mia Sharma",
      role: "Regular Customer",
      review:
        "I absolutely love the atmosphere here. Their latte is smooth and delicious, and it is the perfect place to relax with friends.",
      rating: 5,
      initial: "M",
    },
    {
      name: "Rohan Mehta",
      role: "Happy Customer",
      review:
        "A beautiful café with amazing coffee and friendly service. Every visit feels special and I always enjoy coming back.",
      rating: 5,
      initial: "R",
    },
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="brewspot-reviews" id="reviews">
      <div className="container">

        {/* Heading */}
        <div className="brewspot-reviews-heading text-center">

          <span className="brewspot-reviews-label">
            <FiMessageCircle />
            CUSTOMER LOVE
          </span>

          <h2>
            What Our Customers
            <br />
            <span>Say About Us.</span>
          </h2>

          <p>
            Great coffee is better when it is shared.
            See what our customers have to say about their Brewspot experience.
          </p>

        </div>

        {/* Reviews */}
        <div className="row g-4 brewspot-reviews-row">

          {reviews.map((review, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
            >
              <div className="brewspot-review-card">

                {/* Top */}
                <div className="brewspot-review-top">

                  <div className="brewspot-review-quote">
                    <FiMessageCircle />
                  </div>

                  <div className="brewspot-review-stars">
                    {Array.from({ length: review.rating }).map(
                      (_, starIndex) => (
                        <FiStar
                          key={starIndex}
                          className="brewspot-star"
                        />
                      )
                    )}
                  </div>

                </div>

                {/* Review */}
                <p className="brewspot-review-text">
                  "{review.review}"
                </p>

                {/* Customer */}
                <div className="brewspot-review-user">

                  <div className="brewspot-review-avatar">
                    {review.initial}
                  </div>

                  <div className="brewspot-review-user-info">
                    <h3>{review.name}</h3>
                    <span>{review.role}</span>
                  </div>

                  <FiHeart className="brewspot-review-heart" />

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="brewspot-reviews-bottom text-center">

          <div className="brewspot-reviews-rating">
            <div className="brewspot-rating-stars">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <strong>5.0</strong>

            <span>Loved by our coffee community</span>
          </div>

          <button
            className="brewspot-reviews-btn"
            onClick={scrollToContact}
          >
            Visit Brewspot
            <FiArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}

export default Reviews;