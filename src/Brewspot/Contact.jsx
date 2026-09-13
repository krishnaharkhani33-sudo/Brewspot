import React, { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section
      className="brewspot-contact"
      id="contact"
    >
      <div className="container">
        {/* =================================================
            HEADING
        ================================================= */}

        <div className="brewspot-contact-heading text-center">
          <span className="brewspot-contact-label">
            <FiMapPin />
            VISIT BREWSPOT
          </span>

          <h2>
            Let's Make Your
            <br />
            <span>Next Coffee Moment.</span>
          </h2>

          <p>
            Whether you are meeting friends, working
            quietly, or simply enjoying your favorite
            coffee, we would love to have you.
          </p>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="row g-5 align-items-stretch">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="col-lg-5 col-md-12">
            <div className="brewspot-contact-info">
              {/* Header */}

              <div className="brewspot-contact-info-header">
                <span>COME SAY HELLO</span>

                <h3>
                  We'd Love To See You.
                </h3>

                <p>
                  Step into Brewspot, grab your
                  favorite coffee, and make yourself
                  comfortable.
                </p>
              </div>

              {/* Address */}

              <div className="brewspot-contact-item">
                <div className="brewspot-contact-icon">
                  <FiMapPin />
                </div>

                <div className="brewspot-contact-item-content">
                  <span>OUR LOCATION :</span>

                  <p>
                    G-16, Prime Shoppers Vesu,
                    <br />
                    Surat, Gujarat
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="brewspot-contact-item">
                <div className="brewspot-contact-icon">
                  <FiPhone />
                </div>

                <div className="brewspot-contact-item-content">
                  <span>CALL US :</span>

                  <p>
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="brewspot-contact-item">
                <div className="brewspot-contact-icon">
                  <FiMail />
                </div>

                <div className="brewspot-contact-item-content">
                  <span>EMAIL US :</span>

                  <p>
                    hello@brewspot.com
                  </p>
                </div>
              </div>

              {/* Opening Hours */}

              <div className="brewspot-contact-hours">
                <div className="brewspot-contact-hours-icon">
                  <FiClock />
                </div>

                <div className="brewspot-contact-hours-content">
                  <span>OPENING HOURS :</span>

                  <div className="brewspot-hours-row">
                    <p>Monday - Friday</p>
                    <strong>
                      8:00 AM - 10:00 PM
                    </strong>
                  </div>

                  <div className="brewspot-hours-row">
                    <p>Saturday - Sunday</p>
                    <strong>
                      9:00 AM - 11:00 PM
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="col-lg-7 col-md-12">
            <div className="brewspot-contact-form-wrapper">
              {/* Form Heading */}

              <div className="brewspot-contact-form-heading">
                <div className="brewspot-form-title-icon">
                  <FiCalendar />
                </div>

                <div>
                  <span>RESERVE A TABLE</span>

                  <h3>
                    Plan Your Visit
                  </h3>
                </div>
              </div>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {submitted ? (
                <div className="brewspot-success">
                  <div className="brewspot-success-icon">
                    <FiCheckCircle />
                  </div>

                  <h3>
                    Thank You!
                  </h3>

                  <p>
                    Your table request has been
                    submitted successfully. We will
                    get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  className="brewspot-contact-form"
                  onSubmit={handleSubmit}
                >
                  {/* Name */}

                  <div className="brewspot-form-group">
                    <label>
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Phone */}

                  <div className="brewspot-form-group">
                    <label>
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Email */}

                  <div className="brewspot-form-group">
                    <label>
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Guests + Date */}

                  <div className="brewspot-form-row">
                    <div className="brewspot-form-group">
                      <label>
                        Guests
                      </label>

                      <select
                        required
                        defaultValue=""
                      >
                        <option
                          value=""
                          disabled
                        >
                          Select guests
                        </option>

                        <option value="1">
                          1 Person
                        </option>

                        <option value="2">
                          2 People
                        </option>

                        <option value="3">
                          3 People
                        </option>

                        <option value="4">
                          4 People
                        </option>

                        <option value="5">
                          5 People
                        </option>

                        <option value="6">
                          6+ People
                        </option>
                      </select>
                    </div>

                    <div className="brewspot-form-group">
                      <label>
                        Date
                      </label>

                      <input
                        type="date"
                        required
                      />
                    </div>
                  </div>

                  {/* Time */}

                  <div className="brewspot-form-group">
                    <label>
                      Preferred Time
                    </label>

                    <select
                      required
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select time
                      </option>

                      <option value="09:00">
                        9:00 AM
                      </option>

                      <option value="10:00">
                        10:00 AM
                      </option>

                      <option value="11:00">
                        11:00 AM
                      </option>

                      <option value="12:00">
                        12:00 PM
                      </option>

                      <option value="01:00">
                        1:00 PM
                      </option>

                      <option value="02:00">
                        2:00 PM
                      </option>

                      <option value="04:00">
                        4:00 PM
                      </option>

                      <option value="05:00">
                        5:00 PM
                      </option>

                      <option value="06:00">
                        6:00 PM
                      </option>

                      <option value="07:00">
                        7:00 PM
                      </option>

                      <option value="08:00">
                        8:00 PM
                      </option>

                      <option value="09:00">
                        9:00 PM
                      </option>
                    </select>
                  </div>

                  {/* Message */}

                  <div className="brewspot-form-group">
                    <label>
                      Special Request
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Any special request?"
                    ></textarea>
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="brewspot-contact-submit"
                  >
                    Reserve My Table
                    <FiSend />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;