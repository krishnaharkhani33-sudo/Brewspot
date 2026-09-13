import React from "react";
import {
  FiCoffee,
  FiArrowRight,
  FiStar,
  FiShoppingBag,
} from "react-icons/fi";
import "./MenuPage.css";

const chefPicks = [
  {
    name: "Signature Cappuccino",
    description:
      "Rich espresso, silky steamed milk and a delicate layer of creamy foam.",
    price: "$5.50",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Caramel Latte",
    description:
      "Smooth espresso blended with steamed milk and a warm caramel finish.",
    price: "$6.00",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Blueberry Cheesecake",
    description:
      "Creamy cheesecake finished with sweet blueberry topping.",
    price: "$6.50",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85",
  },
];

const collections = [
  {
    number: "01",
    title: "Coffee & Espresso",
    text: "Bold espresso, smooth lattes and carefully crafted signature brews.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "02",
    title: "Food & Snacks",
    text: "Fresh sandwiches, pasta and delicious bites made for every moment.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "03",
    title: "Desserts",
    text: "Sweet treats, cakes and desserts to complete your coffee moment.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "04",
    title: "Cold Drinks",
    text: "Refreshing cold brews, iced coffees and chilled favourites.",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1600&q=90",
  },
];

const popularItems = [
  {
    name: "Classic Espresso",
    category: "Coffee",
    price: "$4.00",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Classic Club Sandwich",
    category: "Food",
    price: "$8.50",
    rating: "4.8",
    image:
      "https://oliveoilsfromspain.org/wp-content/uploads/2024/01/Club-sandwich.jpg",
  },
  {
    name: "Chocolate Brownie",
    category: "Dessert",
    price: "$4.75",
    rating: "4.9",
    image:
      "https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder-1200x821.jpg",
  },
];

function MenuPage() {
  const handleOrder = (name) => {
    alert(`Order request for ${name}`);
  };

  return (
    <main className="brewspot-new-menu-page">

      {/* HERO */}
      <section className="brewspot-new-menu-hero">
        <div className="brewspot-new-menu-hero-overlay"></div>

        <div className="brewspot-new-menu-hero-content">
          <span className="brewspot-new-menu-eyebrow">
            <FiCoffee />
            BREWSPOT MENU
          </span>

          <h1>
            A Menu Made
            <br />
            <span>For Every Moment.</span>
          </h1>

          <p>
            From carefully brewed coffee to delicious bites and sweet
            favourites, discover something made just for you.
          </p>

          <button type="button" className="brewspot-new-menu-hero-btn">
            Explore Our Menu
            <FiArrowRight />
          </button>
        </div>
      </section>


      {/* CHEF PICKS */}
      <section className="brewspot-chef-section">

        <div className="brewspot-chef-header">
          <span className="brewspot-section-label">
            OUR FAVOURITES
          </span>

          <h2>
            Chef's <span>Picks</span>
          </h2>

          <p>
            A selection of Brewspot favourites, carefully chosen for
            unforgettable coffee moments.
          </p>
        </div>


        <div className="brewspot-chef-grid">
          {chefPicks.map((item) => (
            <article
              className="brewspot-chef-card"
              key={item.name}
            >
              <div className="brewspot-chef-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <span className="brewspot-chef-tag">
                  CHEF PICK
                </span>
              </div>

              <div className="brewspot-chef-content">

                <div className="brewspot-chef-rating">
                  <FiStar />
                  <span>{item.rating}</span>
                </div>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="brewspot-chef-bottom">
                  <strong>{item.price}</strong>

                  <button
                    type="button"
                    onClick={() => handleOrder(item.name)}
                  >
                    Order
                    <FiArrowRight />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </section>


      {/* COLLECTIONS */}
      <section className="brewspot-menu-collections">

        <div className="brewspot-collections-header">

          <span className="brewspot-section-label">
            EXPLORE OUR MENU
          </span>

          <h2>
            Something Good Is
            <br />
            <span>Always Brewing.</span>
          </h2>

          <p>
            Discover our carefully crafted collections, from rich coffee
            and delicious food to desserts and refreshing drinks.
          </p>

        </div>


        <div className="brewspot-collections-list">

          {collections.map((item) => (
            <article
              className="brewspot-collection-card"
              key={item.title}
            >

              {/* FULL BOX IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              {/* DARK IMAGE OVERLAY */}
              <div className="brewspot-collection-overlay"></div>


              {/* ALL CONTENT OVER IMAGE */}
              <div className="brewspot-collection-content">

                <div className="brewspot-collection-top">

                  <span className="brewspot-collection-number">
                    {item.number}
                  </span>

                  <span className="brewspot-collection-line"></span>

                </div>


                <h3>{item.title}</h3>

                <p>{item.text}</p>


                <button
                  type="button"
                  className="brewspot-collection-btn"
                >
                  Explore Collection
                  <FiArrowRight />
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* POPULAR */}
      <section className="brewspot-popular-section">

        <div className="brewspot-popular-header">

          <div>
            <span className="brewspot-section-label">
              MOST LOVED
            </span>

            <h2>
              Popular <span>Right Now</span>
            </h2>
          </div>

          <button
            type="button"
            className="brewspot-view-menu-btn"
          >
            View Full Menu
            <FiArrowRight />
          </button>

        </div>


        <div className="brewspot-popular-grid">

          {popularItems.map((item) => (
            <article
              className="brewspot-popular-card"
              key={item.name}
            >

              <div className="brewspot-popular-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
              </div>

              <div className="brewspot-popular-content">

                <span>{item.category}</span>

                <h3>{item.name}</h3>

                <div className="brewspot-popular-bottom">

                  <div className="brewspot-popular-rating">
                    <FiStar />
                    {item.rating}
                  </div>

                  <strong>{item.price}</strong>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="brewspot-menu-cta">

        <div className="brewspot-menu-cta-content">

          <FiShoppingBag />

          <span>YOUR NEXT COFFEE MOMENT</span>

          <h2>
            Come Hungry.
            <br />
            <em>Leave Happy.</em>
          </h2>

          <p>
            Great coffee, delicious food and a place worth staying for.
          </p>

          <button
            type="button"
            className="brewspot-menu-cta-btn"
          >
            Order Your Favourite
            <FiArrowRight />
          </button>

        </div>

      </section>

    </main>
  );
}

export default MenuPage;