import React, { useState } from "react";
import {
  FiCoffee,
  FiStar,
  FiArrowRight,
  FiX,
  FiCheck,
} from "react-icons/fi";
import "./CoffeePage.css";

const coffeeItems = [
  {
    name: "Classic Espresso",
    description: "Rich espresso with a smooth crema and bold finish.",
    price: "₹140",
    rating: "4.9",
    tag: "BESTSELLER",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KvthEZu_OVfjL0SoCiwZGKaNK2HLZv4Y_q3IJpti08r6N0W6-8oUmWJ2&s=10",
  },
  {
    name: "Cappuccino",
    description:
      "Bold espresso balanced with steamed milk and soft foam.",
    price: "₹190",
    rating: "4.8",
    tag: "POPULAR",
    image:
      "https://thriftylittlemom.com/wp-content/uploads/2014/03/Iced-Caramel-Machiatto-drink.jpg",
  },
  {
    name: "Cold Coffee",
    description: "Smooth espresso with silky steamed milk.",
    price: "₹210",
    rating: "4.9",
    tag: "FAVOURITE",
    image:
    "https://milkandpop.com/wp-content/uploads/2020/11/mocha-latte-13.jpg"
   ,
  },
  {
    name: "Mocha",
    description:
      "Espresso, chocolate and creamy milk in every sip.",
    price: "₹230",
    rating: "4.8",
    tag: "SIGNATURE",
    image:
      "https://media.istockphoto.com/id/1366672341/photo/glass-with-ice-and-coffee.jpg?s=612x612&w=0&k=20&c=lR7zj__gNDmO0aXfjV8N9Ti-WnOx2iuNxRRyEDvFCi4=" ,
  },
  {
    name: "Flat White",
    description:
      "Velvety milk foam with perfectly balanced espresso.",
    price: "₹220",
    rating: "4.7",
    tag: "NEW",
    image:
      "https://img.magnific.com/free-photo/top-view-hot-espresso-with-brown-coffee-seeds-brown-wooden-desk-coffee-cup-drink_140725-28168.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Caramel Macchiato",
    description:
      "Espresso, milk and caramel with a sweet finish.",
    price: "₹250",
    rating: "4.9",
    tag: "SPECIAL",
    image:
      " https://orders.popskitchen.in/storage/2024/09/image-19.png",
  },
];
function CoffeePage() {
  const [showOrder, setShowOrder] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    coffee: "Cappuccino",
    size: "Regular",
    quantity: "1",
    orderType: "Takeaway",
    note: "",
  });

  const openOrder = (coffeeName) => {
    setFormData((prev) => ({
      ...prev,
      coffee: coffeeName,
    }));

    setSuccess(false);
    setShowOrder(true);
  };

  const closeOrder = () => {
    setShowOrder(false);
    setSuccess(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <main className="brewspot-coffee-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="brewspot-coffee-hero">
        <div className="brewspot-coffee-hero-overlay"></div>

        <div className="brewspot-coffee-hero-content">
          <span className="brewspot-coffee-eyebrow">
            <FiCoffee />
            COFFEE & ESPRESSO
          </span>

          <h1>
            Crafted Coffee.
            <br />
            <span>Made For You.</span>
          </h1>

          <p>
            Discover carefully prepared coffee made from quality beans,
            smooth flavours and a little Brewspot magic.
          </p>

          <a
            href="#coffee-menu"
            className="brewspot-coffee-hero-btn"
          >
            Explore Coffee
            <FiArrowRight />
          </a>
        </div>

        <div className="brewspot-coffee-round-badge">
          <div>
            <FiCoffee />
            <span>FRESHLY</span>
            <strong>BREWED</strong>
            <small>EVERY DAY</small>
          </div>
        </div>
      </section>


      {/* =========================
          THE BREW RITUAL
          NOW DIRECTLY BELOW HERO
      ========================= */}
      <section className="brewspot-brew-ritual">
        <div className="brewspot-brew-ritual-image">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=90"
            alt="Fresh coffee being brewed"
            loading="lazy"
          />

          <div className="brewspot-brew-ritual-stamp">
            <FiCoffee />
            <span>THE</span>
            <strong>
              BREW
              <br />
              RITUAL
            </strong>
          </div>
        </div>

        <div className="brewspot-brew-ritual-content">
          <span className="brewspot-coffee-label">
            THE BREW RITUAL
          </span>

          <h2>
            Good coffee
            <br />
            <span>starts with a moment.</span>
          </h2>

          <p>
            We keep the process simple. Quality beans, careful brewing
            and a little time are all it takes to create a cup worth
            slowing down for.
          </p>

          <div className="brewspot-brew-steps">

            <div className="brewspot-brew-step">
              <strong>01</strong>

              <div>
                <h4>Choose</h4>
                <p>Pick the coffee that matches your mood.</p>
              </div>
            </div>

            <div className="brewspot-brew-step">
              <strong>02</strong>

              <div>
                <h4>Brew</h4>
                <p>Our baristas prepare every cup with care.</p>
              </div>
            </div>

            <div className="brewspot-brew-step">
              <strong>03</strong>

              <div>
                <h4>Enjoy</h4>
                <p>Take a sip, slow down and enjoy your moment.</p>
              </div>
            </div>

          </div>

          <div className="brewspot-brew-ritual-quote">
            “Small pause. Great coffee. Better day.”
          </div>
        </div>
      </section>


      {/* =========================
          COFFEE MENU
      ========================= */}
      <section
        className="brewspot-coffee-menu"
        id="coffee-menu"
      >
        <div className="brewspot-coffee-menu-heading">
          <div>
            <span className="brewspot-coffee-label">
              OUR SELECTION
            </span>

            <h2>
              Find Your
              <br />
              <span>Favourite Cup.</span>
            </h2>
          </div>

          <p>
            Explore our most-loved coffees, from strong espresso
            shots to smooth and creamy favourites.
          </p>
        </div>

        <div className="brewspot-coffee-cards">
          {coffeeItems.map((item) => (
            <article
              className="brewspot-coffee-card"
              key={item.name}
            >
              <div className="brewspot-coffee-card-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <span className="brewspot-coffee-card-tag">
                  {item.tag}
                </span>

                <span className="brewspot-coffee-card-rating">
                  <FiStar />
                  {item.rating}
                </span>
              </div>

              <div className="brewspot-coffee-card-content">
                <div className="brewspot-coffee-card-title">
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </div>

                <p>{item.description}</p>

                <button
                  type="button"
                  className="brewspot-coffee-order-btn"
                  onClick={() => openOrder(item.name)}
                >
                  Order Now
                  <FiArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* =========================
          A LITTLE COFFEE
      ========================= */}
      <section className="brewspot-little-coffee">
        <div className="brewspot-little-coffee-image">
          <img
            src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=90"
            alt="Coffee moment"
            loading="lazy"
          />
        </div>

        <div className="brewspot-little-coffee-content">
          <span className="brewspot-coffee-label">
            A LITTLE COFFEE
          </span>

          <h2>
            Sometimes,
            <br />
            <span>that's all you need.</span>
          </h2>

          <p>
            A warm cup, a quiet corner and a few peaceful minutes.
            Brewspot coffee is made for those little moments that
            make your day feel better.
          </p>

          <div className="brewspot-little-coffee-points">
            <div>
              <strong>01</strong>
              <span>Slow down</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Take a sip</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Enjoy the moment</span>
            </div>
          </div>

          <button
            type="button"
            className="brewspot-little-coffee-btn"
            onClick={() => openOrder("Cappuccino")}
          >
            Order a Coffee
            <FiArrowRight />
          </button>
        </div>
      </section>


      {/* =========================
          ORDER MODAL
      ========================= */}
      {showOrder && (
        <div className="brewspot-order-overlay">
          <div className="brewspot-order-modal">

            <button
              type="button"
              className="brewspot-order-close"
              onClick={closeOrder}
              aria-label="Close order form"
            >
              <FiX />
            </button>

            {!success ? (
              <>
                <div className="brewspot-order-header">
                  <div className="brewspot-order-icon">
                    <FiCoffee />
                  </div>

                  <div>
                    <span>BREWSPOT</span>
                    <h3>Order Your Coffee</h3>
                  </div>
                </div>

                <p className="brewspot-order-description">
                  Choose your preferences and place your coffee order.
                </p>

                <form onSubmit={handleSubmit}>

                  <div className="brewspot-form-grid">
                    <div className="brewspot-form-field">
                      <label htmlFor="name">Your Name</label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="brewspot-form-field">
                      <label htmlFor="phone">Mobile Number</label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div className="brewspot-form-field">
                    <label htmlFor="coffee">
                      Select Coffee
                    </label>

                    <select
                      id="coffee"
                      name="coffee"
                      value={formData.coffee}
                      onChange={handleChange}
                    >
                      {coffeeItems.map((item) => (
                        <option
                          key={item.name}
                          value={item.name}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="brewspot-form-grid three">

                    <div className="brewspot-form-field">
                      <label htmlFor="size">Size</label>

                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                      >
                        <option>Regular</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>
                    </div>

                    <div className="brewspot-form-field">
                      <label htmlFor="quantity">
                        Quantity
                      </label>

                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div className="brewspot-form-field">
                      <label htmlFor="orderType">
                        Order Type
                      </label>

                      <select
                        id="orderType"
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                      >
                        <option>Takeaway</option>
                        <option>Dine In</option>
                      </select>
                    </div>

                  </div>

                  <div className="brewspot-form-field">
                    <label htmlFor="note">
                      Special Request
                    </label>

                    <textarea
                      id="note"
                      name="note"
                      rows="3"
                      placeholder="Less sugar, extra hot..."
                      value={formData.note}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="brewspot-place-order"
                  >
                    Place Order
                    <FiArrowRight />
                  </button>

                </form>
              </>
            ) : (
              <div className="brewspot-order-success">

                <div className="brewspot-success-circle">
                  <FiCheck />
                </div>

                <span>ORDER CONFIRMED</span>

                <h3>
                  Your coffee order
                  <br />
                  <em>has been received.</em>
                </h3>

                <p>
                  Thank you, {formData.name}. Your{" "}
                  <strong>{formData.coffee}</strong> order has been
                  successfully placed.
                </p>

                <div className="brewspot-success-info">
                  <div>
                    <small>SIZE</small>
                    <strong>{formData.size}</strong>
                  </div>

                  <div>
                    <small>QTY</small>
                    <strong>{formData.quantity}</strong>
                  </div>

                  <div>
                    <small>TYPE</small>
                    <strong>{formData.orderType}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeOrder}
                  className="brewspot-success-button"
                >
                  Done
                </button>

              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
}

export default CoffeePage;