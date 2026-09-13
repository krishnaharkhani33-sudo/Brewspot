import React, { useState } from "react";
import {
  FiArrowRight,
  FiStar,
  FiX,
  FiCheck,
  FiCoffee,
} from "react-icons/fi";
import "./DessertsPage.css";

const dessertItems = [
  {
    name: "Chocolate Brownie",
    description:
      "Warm chocolate brownie with a rich centre and soft texture.",
    price: "₹170",
    rating: "4.9",
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Cheesecake",
    description:
      "Creamy classic cheesecake with a smooth and delicate finish.",
    price: "₹220",
    rating: "4.8",
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Chocolate Cake",
    description:
      "Moist chocolate cake layered with smooth chocolate cream.",
    price: "₹200",
    rating: "4.9",
    tag: "FAVOURITE",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Tiramisu",
    description:
      "Soft coffee-soaked layers with mascarpone and cocoa.",
    price: "₹240",
    rating: "4.8",
    tag: "SIGNATURE",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Waffle Stack",
    description:
      "Golden waffles served with cream, chocolate and fresh toppings.",
    price: "₹230",
    rating: "4.7",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Brownie Sundae",
    description:
      "Warm brownie topped with ice cream, chocolate and sweet sauce.",
    price: "₹250",
    rating: "4.9",
    tag: "SPECIAL",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=90",
  },
];

function DessertsPage() {
  const [showOrder, setShowOrder] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dessert: "Chocolate Brownie",
    quantity: "1",
    orderType: "Takeaway",
    note: "",
  });

  const openOrder = (dessertName) => {
    setFormData((prev) => ({
      ...prev,
      dessert: dessertName,
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
    <main className="brewspot-dessert-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="brewspot-dessert-hero">
        <div className="brewspot-dessert-hero-overlay"></div>

        <div className="brewspot-dessert-hero-content">
          <span className="brewspot-dessert-eyebrow">
            DESSERTS & SWEET TREATS
          </span>

          <h1>
            End On A
            <br />
            <span>Sweet Note.</span>
          </h1>

          <p>
            From rich chocolate creations to creamy classics, discover
            desserts made for the sweetest part of your coffee break.
          </p>

          <a
            href="#dessert-menu"
            className="brewspot-dessert-hero-btn"
          >
            Explore Desserts
            <FiArrowRight />
          </a>
        </div>

        <div className="brewspot-dessert-hero-badge">
          <strong>SWEET</strong>
          <span>MOMENTS</span>
        </div>
      </section>


      {/* =========================
          DESSERT MENU
      ========================= */}

      <section
        className="brewspot-dessert-menu"
        id="dessert-menu"
      >
        <div className="brewspot-dessert-heading">
          <div>
            <span className="brewspot-dessert-label">
              FRESH FROM THE KITCHEN
            </span>

            <h2>
              Something
              <br />
              <span>Sweet For You.</span>
            </h2>
          </div>

          <p>
            Pick a favourite or discover something new to make your
            coffee moment a little sweeter.
          </p>
        </div>

        <div className="brewspot-dessert-grid">
          {dessertItems.map((item) => (
            <article
              className="brewspot-dessert-card"
              key={item.name}
            >
              <div className="brewspot-dessert-card-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <span className="brewspot-dessert-tag">
                  {item.tag}
                </span>

                <span className="brewspot-dessert-rating">
                  <FiStar />
                  {item.rating}
                </span>
              </div>

              <div className="brewspot-dessert-card-content">
                <div className="brewspot-dessert-card-title">
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </div>

                <p>{item.description}</p>

                <button
                  type="button"
                  className="brewspot-dessert-order-btn"
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
          SWEET MOMENT
      ========================= */}

      <section className="brewspot-dessert-moment">
        <div className="brewspot-dessert-moment-image">
  <img
    src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/7698/images/1771259689193-about-cafe.jpg"
    alt="Warm cafe with desserts"
    loading="lazy"
  />
</div>
        
  

        <div className="brewspot-dessert-moment-content">

          <span className="brewspot-dessert-label">
            SWEET MOMENT
          </span>

          <h2>
            Leave a little
            <br />
            <span>room for dessert.</span>
          </h2>

          <p>
            Some moments deserve something extra. Pair your favourite
            coffee with a dessert and turn an ordinary break into
            something worth remembering.
          </p>

          <div className="brewspot-dessert-moment-points">

            <div>
              <strong>01</strong>
              <span>Rich & Fresh</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Perfect Pairing</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Made To Enjoy</span>
            </div>

          </div>

          <button
            type="button"
            className="brewspot-dessert-moment-btn"
            onClick={() => openOrder("Chocolate Brownie")}
          >
            Treat Yourself
            <FiArrowRight />
          </button>

        </div>
      </section>


      {/* =========================
          ORDER MODAL
      ========================= */}

      {showOrder && (
        <div className="brewspot-dessert-order-overlay">

          <div className="brewspot-dessert-order-modal">

            <button
              type="button"
              className="brewspot-dessert-order-close"
              onClick={closeOrder}
              aria-label="Close order form"
            >
              <FiX />
            </button>

            {!success ? (
              <>
                <div className="brewspot-dessert-order-header">

                  <div className="brewspot-dessert-order-icon">
                    <FiCoffee />
                  </div>

                  <div>
                    <span>BREWSPOT DESSERTS</span>

                    <h3>
                      Order Your Dessert
                    </h3>
                  </div>

                </div>

                <p className="brewspot-dessert-order-description">
                  Choose your dessert and fill in your details to
                  place an order.
                </p>

                <form onSubmit={handleSubmit}>

                  <div className="brewspot-dessert-form-grid">

                    <div className="brewspot-dessert-form-field">
                      <label htmlFor="dessert-name">
                        Your Name
                      </label>

                      <input
                        id="dessert-name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="brewspot-dessert-form-field">
                      <label htmlFor="dessert-phone">
                        Mobile Number
                      </label>

                      <input
                        id="dessert-phone"
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


                  <div className="brewspot-dessert-form-field">
                    <label htmlFor="dessert-select">
                      Select Dessert
                    </label>

                    <select
                      id="dessert-select"
                      name="dessert"
                      value={formData.dessert}
                      onChange={handleChange}
                    >
                      {dessertItems.map((item) => (
                        <option
                          key={item.name}
                          value={item.name}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>


                  <div className="brewspot-dessert-form-grid">

                    <div className="brewspot-dessert-form-field">
                      <label htmlFor="dessert-quantity">
                        Quantity
                      </label>

                      <select
                        id="dessert-quantity"
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

                    <div className="brewspot-dessert-form-field">
                      <label htmlFor="dessert-type">
                        Order Type
                      </label>

                      <select
                        id="dessert-type"
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                      >
                        <option>Takeaway</option>
                        <option>Dine In</option>
                      </select>
                    </div>

                  </div>


                  <div className="brewspot-dessert-form-field">
                    <label htmlFor="dessert-note">
                      Special Request
                    </label>

                    <textarea
                      id="dessert-note"
                      name="note"
                      rows="3"
                      placeholder="Extra chocolate, no nuts..."
                      value={formData.note}
                      onChange={handleChange}
                    ></textarea>
                  </div>


                  <button
                    type="submit"
                    className="brewspot-dessert-place-order"
                  >
                    Place Dessert Order
                    <FiArrowRight />
                  </button>

                </form>
              </>
            ) : (
              <div className="brewspot-dessert-success">

                <div className="brewspot-dessert-success-icon">
                  <FiCheck />
                </div>

                <span>ORDER CONFIRMED</span>

                <h3>
                  Your sweet order
                  <br />
                  <em>has been received.</em>
                </h3>

                <p>
                  Thank you, {formData.name}. Your{" "}
                  <strong>{formData.dessert}</strong> order has been
                  successfully placed.
                </p>

                <div className="brewspot-dessert-success-info">

                  <div>
                    <small>DESSERT</small>
                    <strong>{formData.dessert}</strong>
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
                  className="brewspot-dessert-success-btn"
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

export default DessertsPage;