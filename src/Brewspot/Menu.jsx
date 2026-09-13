import React, { useState } from "react";
import {
  FiArrowRight,
  FiCoffee,
  FiX,
  FiCheck,
} from "react-icons/fi";
import "./Menu.css";

function Menu() {
  const [showOrder, setShowOrder] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const menuItems = [
    {
      name: "Classic Cappuccino",
      description:
        "Rich espresso with smooth steamed milk and soft foam.",
      price: "$5.50",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=85",
      tag: "Popular",
    },
    {
      name: "Caramel Latte",
      description:
        "Creamy espresso blended with milk and caramel.",
      price: "$6.00",
      image:
        "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=700&q=85",
      tag: "Favorite",
    },
    {
      name: "Iced Mocha",
      description:
        "Cold brewed coffee with chocolate and creamy milk.",
      price: "$5.75",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
      tag: "Cold",
    },
  ];

  const fullMenuItems = [
    ...menuItems,
    {
      name: "Espresso",
      description: "Strong and aromatic classic espresso.",
      price: "$4.00",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=85",
      tag: "Classic",
    },
    {
      name: "Vanilla Latte",
      description:
        "Smooth espresso with creamy milk and vanilla.",
      price: "$6.25",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=85",
      tag: "Sweet",
    },
    {
      name: "Cold Brew",
      description:
        "Slow-steeped coffee with a smooth refreshing taste.",
      price: "$5.25",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",
      tag: "Cold",
    },
    {
      name: "Chocolate Croissant",
      description:
        "Freshly baked croissant filled with rich chocolate.",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85",
      tag: "Bakery",
    },
    {
      name: "Blueberry Cheesecake",
      description:
        "Creamy cheesecake topped with fresh blueberries.",
      price: "$6.50",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=85",
      tag: "Dessert",
    },
  ];

  const handleOrder = (itemName) => {
    setSelectedItem(itemName);
    setShowOrder(true);
  };

  const closeOrder = () => {
    setShowOrder(false);
    setSelectedItem("");
  };

  return (
    <>
      {/* =================================================
          MENU SECTION
      ================================================= */}

      <section className="brewspot-menu" id="menu">
        <div className="container">

          <div className="brewspot-menu-heading">

            <div className="brewspot-menu-label">
              <FiCoffee />
              <span>OUR MENU</span>
            </div>

            <h2>
              Crafted For Your
              <br />
              <span>Perfect Moment.</span>
            </h2>

            <p>
              Explore our selection of handcrafted coffee and
              delicious favorites, made fresh with quality
              ingredients.
            </p>

          </div>

          {/* Menu Cards */}

          <div className="row g-4 brewspot-menu-row">

            {menuItems.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >
                <div className="brewspot-menu-card">

                  <div className="brewspot-menu-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <span className="brewspot-menu-tag">
                      {item.tag}
                    </span>

                  </div>

                  <div className="brewspot-menu-content">

                    <div className="brewspot-menu-title">
                      <h3>{item.name}</h3>
                      <strong>{item.price}</strong>
                    </div>

                    <p>{item.description}</p>

                    <button
                      type="button"
                      className="brewspot-menu-btn"
                      onClick={() =>
                        handleOrder(item.name)
                      }
                    >
                      Order Now
                      <FiArrowRight />
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* View Full Menu */}

          <div className="brewspot-menu-bottom">

            <button
              type="button"
              onClick={() => setShowFullMenu(true)}
            >
              View Full Menu
              <FiArrowRight />
            </button>

          </div>

        </div>
      </section>


      {/* =================================================
          ORDER MODAL
      ================================================= */}

      {showOrder && (
        <div
          className="brewspot-modal-overlay"
          onClick={closeOrder}
        >

          <div
            className="brewspot-order-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="brewspot-modal-close"
              onClick={closeOrder}
              aria-label="Close order form"
            >
              <FiX />
            </button>

            <div className="brewspot-modal-heading">

              <div className="brewspot-modal-icon">
                <FiCoffee />
              </div>

              <div>
                <span>BREWSPOT ORDER</span>
                <h2>Book Your Order</h2>
              </div>

            </div>

            <p className="brewspot-modal-text">
              Fill in the details below and our team will
              get your order ready.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Your order request has been submitted!"
                );
                closeOrder();
              }}
            >

              {/* Name + Phone */}

              <div className="brewspot-form-row">

                <div className="brewspot-form-group">
                  <label htmlFor="customer-name">
                    Your Name
                  </label>

                  <input
                    id="customer-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="brewspot-form-group">
                  <label htmlFor="customer-phone">
                    Phone Number
                  </label>

                  <input
                    id="customer-phone"
                    type="tel"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

              </div>

              {/* Email */}

              <div className="brewspot-form-group">
                <label htmlFor="customer-email">
                  Email Address
                </label>

                <input
                  id="customer-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Item + Quantity */}

              <div className="brewspot-form-row">

                <div className="brewspot-form-group">
                  <label htmlFor="selected-item">
                    Selected Item
                  </label>

                  <select
                    id="selected-item"
                    value={selectedItem}
                    onChange={(e) =>
                      setSelectedItem(e.target.value)
                    }
                    required
                  >
                    <option value="">
                      Select an item
                    </option>

                    {fullMenuItems.map((item, index) => (
                      <option
                        value={item.name}
                        key={index}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="brewspot-form-group">
                  <label htmlFor="quantity">
                    Quantity
                  </label>

                  <select id="quantity" required>
                    <option value="">
                      Select
                    </option>

                    <option value="1">
                      1 Item
                    </option>

                    <option value="2">
                      2 Items
                    </option>

                    <option value="3">
                      3 Items
                    </option>

                    <option value="4">
                      4 Items
                    </option>

                    <option value="5">
                      5 Items
                    </option>
                  </select>
                </div>

              </div>

              {/* Date + Time */}

              <div className="brewspot-form-row">

                <div className="brewspot-form-group">
                  <label htmlFor="order-date">
                    Order Date
                  </label>

                  <input
                    id="order-date"
                    type="date"
                    required
                  />
                </div>

                <div className="brewspot-form-group">
                  <label htmlFor="order-time">
                    Order Time
                  </label>

                  <input
                    id="order-time"
                    type="time"
                    required
                  />
                </div>

              </div>

              {/* Special Request */}

              <div className="brewspot-form-group">
                <label htmlFor="special-request">
                  Special Request
                </label>

                <textarea
                  id="special-request"
                  rows="3"
                  placeholder="Any special request?"
                ></textarea>
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="brewspot-submit-order"
              >
                Confirm Order
                <FiCheck />
              </button>

            </form>

          </div>

        </div>
      )}


      {/* =================================================
          FULL MENU MODAL
      ================================================= */}

      {showFullMenu && (
        <div
          className="brewspot-modal-overlay brewspot-full-menu-overlay"
          onClick={() => setShowFullMenu(false)}
        >

          <div
            className="brewspot-full-menu-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="brewspot-modal-close"
              onClick={() => setShowFullMenu(false)}
              aria-label="Close full menu"
            >
              <FiX />
            </button>

            <div className="brewspot-modal-heading full-menu-heading">

              <div className="brewspot-modal-icon">
                <FiCoffee />
              </div>

              <div>
                <span>BREWSPOT</span>
                <h2>Our Full Menu</h2>
              </div>

            </div>

            <p className="brewspot-modal-text">
              Discover more of our handcrafted drinks,
              bakery favorites and sweet treats.
            </p>

            <div className="brewspot-full-menu-list">

              {fullMenuItems.map((item, index) => (
                <div
                  className="brewspot-full-menu-item"
                  key={index}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="brewspot-full-menu-info">

                    <div>
                      <h3>{item.name}</h3>
                      <strong>{item.price}</strong>
                    </div>

                    <p>{item.description}</p>

                    <button
                      type="button"
                      onClick={() =>
                        handleOrder(item.name)
                      }
                    >
                      Order Now
                      <FiArrowRight />
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      )}

    </>
  );
}

export default Menu;