import React from "react";
import {
  FiCoffee,
  FiStar,
  FiClock,
  FiHeart,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import "./WhyChoose.css";

function WhyChoose() {
  const reasons = [
    {
      icon: <FiCoffee />,
      title: "Premium Coffee",
      text: "Carefully selected beans roasted for a rich and smooth taste.",
    },
    {
      icon: <FiStar />,
      title: "Quality First",
      text: "Every cup is prepared with attention to quality and detail.",
    },
    {
      icon: <FiClock />,
      title: "Fresh Every Day",
      text: "Fresh ingredients and freshly prepared coffee served every day.",
    },
    {
      icon: <FiHeart />,
      title: "Made With Care",
      text: "We create every drink and dish with passion and care.",
    },
  ];

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
    <section className="brewspot-why" id="why-choose">
      <div className="container">

        {/* Heading */}
        <div className="brewspot-why-heading text-center">
          <span className="brewspot-why-label">
            <FiCheckCircle />
            WHY BREWSPOT
          </span>

          <h2>
            Crafted With Passion,
            <br />
            <span>Served With Purpose.</span>
          </h2>

          <p>
            From the beans we choose to the moment your coffee reaches your
            table, every detail is made to give you a better coffee experience.
          </p>
        </div>

        {/* Main Content */}
        <div className="row align-items-center brewspot-why-main">

          {/* Left Image */}
          <div className="col-lg-5 col-md-12">
            <div className="brewspot-why-image-wrap">

              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
                alt="Fresh coffee at Brewspot"
                className="brewspot-why-image"
              />

              {/* Circle Badge */}
              <div className="brewspot-why-badge">
                <strong>10+</strong>
                <span>Years of Coffee Love</span>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-7 col-md-12">
            <div className="brewspot-reasons">

              {reasons.map((reason, index) => (
                <div className="brewspot-reason" key={index}>

                  <div className="brewspot-reason-icon">
                    {reason.icon}
                  </div>

                  <div className="brewspot-reason-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>

                  <div className="brewspot-reason-number">
                    0{index + 1}
                  </div>

                </div>
              ))}

            </div>

            {/* Button */}
            <button
              className="brewspot-why-btn"
              onClick={() => scrollToSection("contact")}
            >
              Visit Brewspot
              <FiArrowRight />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;