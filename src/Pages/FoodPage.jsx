import React, { useState } from "react";
import {
  FiArrowRight,
  FiStar,
  FiX,
  FiCheck,
  FiCoffee,
} from "react-icons/fi";
import "./FoodPage.css";

const foodItems = [
  {
    name: "Grilled Sandwich",
    description:
      "Crispy toasted bread filled with fresh vegetables and melted cheese.",
    price: "₹180",
    rating: "4.8",
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Creamy Pasta",
    description:
      "Rich and creamy pasta tossed with herbs and delicious sauce.",
    price: "₹240",
    rating: "4.9",
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Loaded Fries",
    description:
      "Golden crispy fries topped with cheese, herbs and signature sauce.",
    price: "₹160",
    rating: "4.7",
    tag: "FAVOURITE",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Veggie Burger",
    description:
      "Juicy veggie patty with fresh lettuce, tomato and creamy dressing.",
    price: "₹220",
    rating: "4.8",
    tag: "SIGNATURE",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Garlic Bread",
    description:
      "Warm toasted bread with garlic butter, herbs and cheese.",
    price: "₹150",
    rating: "4.7",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Paneer Wrap",
    description:
      "Soft wrap packed with spiced paneer, vegetables and creamy sauce.",
    price: "₹190",
    rating: "4.9",
    tag: "SPECIAL",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1000&q=90",
  },
];

function FoodPage() {
  const [showOrder, setShowOrder] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    food: "Grilled Sandwich",
    quantity: "1",
    orderType: "Takeaway",
    note: "",
  });

  const openOrder = (foodName) => {
    setFormData((prev) => ({
      ...prev,
      food: foodName,
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
    <main className="brewspot-food-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="brewspot-food-hero">
        <div className="brewspot-food-hero-overlay"></div>

        <div className="brewspot-food-hero-content">
          <span className="brewspot-food-eyebrow">
            FOOD & SNACKS
          </span>

          <h1>
            Good Food.
            <br />
            <span>Good Company.</span>
          </h1>

          <p>
            Freshly prepared bites, comforting favourites and tasty
            snacks made to perfectly match your coffee moment.
          </p>

          <a
            href="#food-menu"
            className="brewspot-food-hero-btn"
          >
            Explore Food
            <FiArrowRight />
          </a>
        </div>

        <div className="brewspot-food-hero-note">
          <strong>FRESH</strong>
          <span>MADE DAILY</span>
        </div>
      </section>


      {/* =========================
          FOOD MENU
      ========================= */}

      <section
        className="brewspot-food-menu"
        id="food-menu"
      >
        <div className="brewspot-food-menu-heading">
          <div>
            <span className="brewspot-food-label">
              FROM OUR KITCHEN
            </span>

            <h2>
              Something
              <br />
              <span>Delicious.</span>
            </h2>
          </div>

          <p>
            From quick bites to filling favourites, discover food
            made fresh for every kind of craving.
          </p>
        </div>

        <div className="brewspot-food-cards">
          {foodItems.map((item) => (
            <article
              className="brewspot-food-card"
              key={item.name}
            >
              <div className="brewspot-food-card-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <span className="brewspot-food-tag">
                  {item.tag}
                </span>

                <span className="brewspot-food-rating">
                  <FiStar />
                  {item.rating}
                </span>
              </div>

              <div className="brewspot-food-card-content">
                <div className="brewspot-food-card-title">
                  <h3>{item.name}</h3>

                  <strong>{item.price}</strong>
                </div>

                <p>{item.description}</p>

                <button
                  type="button"
                  className="brewspot-food-order-btn"
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
          MADE FOR EVERY CRAVING
      ========================= */}

      <section className="brewspot-food-craving">

        <div className="brewspot-food-craving-content">
          <span className="brewspot-food-label">
            MADE FOR EVERY CRAVING
          </span>

          <h2>
            A little bite
            <br />
            <span>can change your day.</span>
          </h2>

          <p>
            Whether you need something quick between tasks or a
            proper meal with your coffee, Brewspot keeps it simple,
            fresh and satisfying.
          </p>

          <div className="brewspot-food-craving-points">

            <div>
              <strong>01</strong>
              <span>Fresh Ingredients</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Made To Order</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Perfect With Coffee</span>
            </div>

          </div>

          <button
            type="button"
            className="brewspot-food-craving-btn"
            onClick={() => openOrder("Grilled Sandwich")}
          >
            Order Something
            <FiArrowRight />
          </button>
        </div>

        <div className="brewspot-food-craving-images">

          <div className="brewspot-food-small-image">
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=90"
              alt="Fresh food"
              loading="lazy"
            />
          </div>

          <div className="brewspot-food-large-image">
            <img
              src="https://images.wsj.net/im-89685631?width=700&height=808"
              alt="Cafe food"
              loading="lazy"
            />
          </div>

        </div>

      </section>


      {/* =========================
          ORDER MODAL
      ========================= */}

      {showOrder && (
        <div className="brewspot-food-order-overlay">

          <div className="brewspot-food-order-modal">

            <button
              type="button"
              className="brewspot-food-order-close"
              onClick={closeOrder}
              aria-label="Close order form"
            >
              <FiX />
            </button>

            {!success ? (
              <>
                <div className="brewspot-food-order-header">

                  <div className="brewspot-food-order-icon">
                    <FiCoffee />
                  </div>

                  <div>
                    <span>BREWSPOT FOOD</span>

                    <h3>
                      Order Your Food
                    </h3>
                  </div>

                </div>

                <p className="brewspot-food-order-description">
                  Choose your food and fill in your details to place
                  an order.
                </p>

                <form onSubmit={handleSubmit}>

                  <div className="brewspot-food-form-grid">

                    <div className="brewspot-food-form-field">
                      <label htmlFor="food-name">
                        Your Name
                      </label>

                      <input
                        id="food-name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="brewspot-food-form-field">
                      <label htmlFor="food-phone">
                        Mobile Number
                      </label>

                      <input
                        id="food-phone"
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


                  <div className="brewspot-food-form-field">
                    <label htmlFor="food-select">
                      Select Food
                    </label>

                    <select
                      id="food-select"
                      name="food"
                      value={formData.food}
                      onChange={handleChange}
                    >
                      {foodItems.map((item) => (
                        <option
                          key={item.name}
                          value={item.name}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>


                  <div className="brewspot-food-form-grid three">

                    <div className="brewspot-food-form-field">
                      <label htmlFor="food-quantity">
                        Quantity
                      </label>

                      <select
                        id="food-quantity"
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

                    <div className="brewspot-food-form-field">
                      <label htmlFor="food-order-type">
                        Order Type
                      </label>

                      <select
                        id="food-order-type"
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                      >
                        <option>Takeaway</option>
                        <option>Dine In</option>
                      </select>
                    </div>

                    <div className="brewspot-food-form-field">
                      <label htmlFor="food-note">
                        Add Note
                      </label>

                      <input
                        id="food-note"
                        type="text"
                        name="note"
                        placeholder="Optional"
                        value={formData.note}
                        onChange={handleChange}
                      />
                    </div>

                  </div>


                  <button
                    type="submit"
                    className="brewspot-food-place-order"
                  >
                    Place Food Order
                    <FiArrowRight />
                  </button>

                </form>
              </>
            ) : (
              <div className="brewspot-food-success">

                <div className="brewspot-food-success-icon">
                  <FiCheck />
                </div>

                <span>ORDER CONFIRMED</span>

                <h3>
                  Your food order
                  <br />
                  <em>has been received.</em>
                </h3>

                <p>
                  Thank you, {formData.name}. Your{" "}
                  <strong>{formData.food}</strong> order has been
                  successfully placed.
                </p>

                <div className="brewspot-food-success-info">

                  <div>
                    <small>ITEM</small>
                    <strong>{formData.food}</strong>
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
                  className="brewspot-food-success-btn"
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

export default FoodPage;