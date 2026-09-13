import React, { useState } from "react";
import {
  FiArrowRight,
  FiStar,
  FiX,
  FiCheck,
  FiCoffee,
} from "react-icons/fi";
import "./ColdDrinksPage.css";

const coldDrinkItems = [
  {
    name: "Iced Latte",
    description:
      "Smooth espresso, chilled milk and ice for a refreshing finish.",
    price: "₹210",
    rating: "4.9",
    tag: "POPULAR",
    image:
      "https://www.herdheld.de/uploads/alkoholfreie-drinks-virgin-mojito.webp",
  },
  {
    name: "Cold Brew",
    description:
      "Slow-steeped coffee with a naturally smooth and bold flavour.",
    price: "₹220",
    rating: "4.8",
    tag: "BESTSELLER",
    image:
      "https://7cheesepizza.com/assets/images/7cheese-pizza/blueberry-mojito-mocktail.webp",
  },
  {
    name: "Iced Mocha",
    description:
      "Chilled espresso, chocolate and milk topped with a creamy finish.",
    price: "₹240",
    rating: "4.9",
    tag: "FAVOURITE",
    image:
      "https://www.mixbooze.com/articles/Non-Alcoholic%20Mojito/Non-Alcoholic%20Mojito.jpeg",
  },
  {
    name: "Vanilla Frappe",
    description:
      "Creamy blended coffee with vanilla and a cool smooth texture.",
    price: "₹250",
    rating: "4.8",
    tag: "SIGNATURE",
    image:
      "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2016/07/pepper-delight-blueberry-virjin-mojito-2.jpg?resize=3881%2C5286",
  },
  {
    name: "Berry Smoothie",
    description:
      "Fresh berries blended into a naturally fruity and creamy drink.",
    price: "₹230",
    rating: "4.7",
    tag: "FRESH",
    image:
      "https://manjeriskincare.com/cdn/shop/articles/watermelon_mint_68c2a160-ff39-4558-b161-4aab182aae1a.png?v=1757892538",
  },
  {
    name: "Mint Cooler",
    description:
      "Refreshing mint, citrus and ice for a bright chilled drink.",
    price: "₹190",
    rating: "4.8",
    tag: "NEW",
    image:
      "https://www.herdheld.de/uploads/alkoholfreie-drinks-virgin-mojito.webp",
  },
];

function ColdDrinksPage() {
  const [showOrder, setShowOrder] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    drink: "Iced Latte",
    size: "Regular",
    quantity: "1",
    orderType: "Takeaway",
    note: "",
  });

  const openOrder = (drinkName) => {
    setFormData((prev) => ({
      ...prev,
      drink: drinkName,
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
    <main className="brewspot-cold-page">

      {/* HERO */}
      <section className="brewspot-cold-hero">
        <div className="brewspot-cold-hero-overlay"></div>

        <div className="brewspot-cold-hero-content">
          <span className="brewspot-cold-eyebrow">
            COLD DRINKS & REFRESHMENTS
          </span>

          <h1>
            Cool Down.
            <br />
            <span>Refresh Your Moment.</span>
          </h1>

          <p>
            Iced coffees, chilled favourites and refreshing blends
            made for warm afternoons and easygoing moments.
          </p>

          <a
            href="#cold-drinks-menu"
            className="brewspot-cold-hero-btn"
          >
            Explore Drinks
            <FiArrowRight />
          </a>
        </div>

        <div className="brewspot-cold-hero-badge">
          <strong>ICE</strong>
          <span>FRESH</span>
        </div>
      </section>


      {/* COLLECTION */}
      <section
        className="brewspot-cold-menu"
        id="cold-drinks-menu"
      >
        <div className="brewspot-cold-heading">
          <div>
            <span className="brewspot-cold-label">
              THE COOL COLLECTION
            </span>

            <h2>
              Fresh Sips.
              <br />
              <span>Easy Moments.</span>
            </h2>
          </div>

          <p>
            Discover refreshing blends and chilled coffee favourites
            prepared to make your day a little cooler.
          </p>
        </div>

        <div className="brewspot-cold-grid">
          {coldDrinkItems.map((item) => (
            <article
              className="brewspot-cold-card"
              key={item.name}
            >
              <div className="brewspot-cold-card-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <span className="brewspot-cold-tag">
                  {item.tag}
                </span>

                <span className="brewspot-cold-rating">
                  <FiStar />
                  {item.rating}
                </span>
              </div>

              <div className="brewspot-cold-card-content">
                <div className="brewspot-cold-card-title">
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </div>

                <p>{item.description}</p>

                <button
                  type="button"
                  className="brewspot-cold-order-btn"
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


      {/* REFRESHMENT SECTION */}
      <section className="brewspot-cold-refresh">

        <div className="brewspot-cold-refresh-image">
          <img
            src="https://daromas.in/cdn/shop/files/Ribbed-wine-Glass-2.jpg?v=1775479606&width=1946"
            alt="Refreshing cold drink"
            loading="lazy"
          />
        </div>

        <div className="brewspot-cold-refresh-content">
          <span className="brewspot-cold-label">
            A COOLER WAY TO PAUSE
          </span>

          <h2>
            Chill a little.
            <br />
            <span>Enjoy a lot.</span>
          </h2>

          <p>
            Whether you're after a cold coffee, a fruity blend or
            something light and refreshing, there's always a good
            reason to slow down with a chilled drink.
          </p>

          <div className="brewspot-cold-points">
            <div>
              <strong>01</strong>
              <span>Served Chilled</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Fresh Ingredients</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Perfect For Summer</span>
            </div>
          </div>

          <button
            type="button"
            className="brewspot-cold-refresh-btn"
            onClick={() => openOrder("Iced Latte")}
          >
            Get Refreshed
            <FiArrowRight />
          </button>
        </div>
      </section>


      {/* ORDER MODAL */}
      {showOrder && (
        <div className="brewspot-cold-order-overlay">
          <div className="brewspot-cold-order-modal">

            <button
              type="button"
              className="brewspot-cold-order-close"
              onClick={closeOrder}
              aria-label="Close order form"
            >
              <FiX />
            </button>

            {!success ? (
              <>
                <div className="brewspot-cold-order-header">
                  <div className="brewspot-cold-order-icon">
                    <FiCoffee />
                  </div>

                  <div>
                    <span>BREWSPOT DRINKS</span>
                    <h3>Order Your Drink</h3>
                  </div>
                </div>

                <p className="brewspot-cold-order-description">
                  Choose your drink, customise it and place your order.
                </p>

                <form onSubmit={handleSubmit}>

                  <div className="brewspot-cold-form-grid">

                    <div className="brewspot-cold-form-field">
                      <label htmlFor="cold-name">
                        Your Name
                      </label>

                      <input
                        id="cold-name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="brewspot-cold-form-field">
                      <label htmlFor="cold-phone">
                        Mobile Number
                      </label>

                      <input
                        id="cold-phone"
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

                  <div className="brewspot-cold-form-field">
                    <label htmlFor="cold-drink">
                      Select Drink
                    </label>

                    <select
                      id="cold-drink"
                      name="drink"
                      value={formData.drink}
                      onChange={handleChange}
                    >
                      {coldDrinkItems.map((item) => (
                        <option
                          key={item.name}
                          value={item.name}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="brewspot-cold-form-grid three">

                    <div className="brewspot-cold-form-field">
                      <label htmlFor="cold-size">
                        Size
                      </label>

                      <select
                        id="cold-size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                      >
                        <option>Regular</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>
                    </div>

                    <div className="brewspot-cold-form-field">
                      <label htmlFor="cold-quantity">
                        Quantity
                      </label>

                      <select
                        id="cold-quantity"
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

                    <div className="brewspot-cold-form-field">
                      <label htmlFor="cold-order-type">
                        Order Type
                      </label>

                      <select
                        id="cold-order-type"
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                      >
                        <option>Takeaway</option>
                        <option>Dine In</option>
                      </select>
                    </div>

                  </div>

                  <div className="brewspot-cold-form-field">
                    <label htmlFor="cold-note">
                      Special Request
                    </label>

                    <textarea
                      id="cold-note"
                      name="note"
                      rows="3"
                      placeholder="Less ice, extra cold..."
                      value={formData.note}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="brewspot-cold-place-order"
                  >
                    Place Drink Order
                    <FiArrowRight />
                  </button>

                </form>
              </>
            ) : (
              <div className="brewspot-cold-success">

                <div className="brewspot-cold-success-icon">
                  <FiCheck />
                </div>

                <span>ORDER CONFIRMED</span>

                <h3>
                  Your drink order
                  <br />
                  <em>has been received.</em>
                </h3>

                <p>
                  Thank you, {formData.name}. Your{" "}
                  <strong>{formData.drink}</strong> order has been
                  successfully placed.
                </p>

                <div className="brewspot-cold-success-info">

                  <div>
                    <small>DRINK</small>
                    <strong>{formData.drink}</strong>
                  </div>

                  <div>
                    <small>QTY</small>
                    <strong>{formData.quantity}</strong>
                  </div>

                  <div>
                    <small>SIZE</small>
                    <strong>{formData.size}</strong>
                  </div>

                </div>

                <button
                  type="button"
                  className="brewspot-cold-success-btn"
                  onClick={closeOrder}
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

export default ColdDrinksPage;