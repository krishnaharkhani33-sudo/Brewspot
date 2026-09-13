import React from "react";
import "./FullMenuPage.css";

const menuSections = [
  {
    id: "coffee",
    number: "01",
    title: "Coffee & Espresso",
    subtitle: "Slow brewed. Carefully crafted.",
    items: [
      {
        name: "Classic Espresso",
        description: "Rich, bold and perfectly balanced.",
        price: "₹140",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyZS7a6XWfJ407AgFMZNu5SYAJrXBlPu1-EhClO1NA46AV31sVZ4sk9c&s=10",
        featured: true,
      },
      {
        name: "Cappuccino",
        description: "Espresso, steamed milk and silky foam.",
        price: "₹180",
        image:
          "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Café Latte",
        description: "Smooth espresso with creamy steamed milk.",
        price: "₹190",
        image:
          "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Café Mocha",
        description: "Espresso, chocolate and steamed milk.",
        price: "₹210",
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Flat White",
        description: "Velvety microfoam with a double espresso.",
        price: "₹195",
        image:
          "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Caramel Latte",
        description: "Silky latte finished with caramel.",
        price: "₹220",
        image:
          "https://www.mygingergarlickitchen.com/wp-content/uploads/2024/05/iced-caramel-latte-recipe-2.jpg",
      },
    ],
  },
  {
    id: "food",
    number: "02",
    title: "Food & Snacks",
    subtitle: "Freshly prepared. Made for sharing.",
    items: [
      {
        name: "Grilled Sandwich",
        description: "Golden grilled bread with fresh fillings.",
        price: "₹220",
        image:
          "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=85",
        featured: true,
      },
      {
        name: "Creamy Pasta",
        description: "House-style creamy pasta with herbs.",
        price: "₹280",
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Loaded Fries",
        description: "Crispy fries with cheese and signature sauce.",
        price: "₹190",
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Veggie Burger",
        description: "Crispy veggie patty with fresh greens.",
        price: "₹250",
        image:
          "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter and herbs.",
        price: "₹160",
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2015/07/cheesy-garlic-bread-1.jpg",
      },
      {
        name: "Paneer Wrap",
        description: "Spiced paneer with fresh vegetables.",
        price: "₹230",
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=300&q=85",
      },
    ],
  },
  {
    id: "desserts",
    number: "03",
    title: "Desserts",
    subtitle: "A sweet finish to every visit.",
    items: [
      {
        name: "Chocolate Brownie",
        description: "Warm, rich and fudgy chocolate brownie.",
        price: "₹160",
        image:
          "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=300&q=85",
        featured: true,
      },
      {
        name: "Classic Cheesecake",
        description: "Creamy cheesecake with a buttery base.",
        price: "₹220",
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Tiramisu",
        description: "Coffee-soaked layers with creamy mascarpone.",
        price: "₹240",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Chocolate Cake",
        description: "Soft chocolate cake with rich ganache.",
        price: "₹200",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Waffle Stack",
        description: "Golden waffles with chocolate drizzle.",
        price: "₹230",
        image:
          "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Brownie Sundae",
        description: "Warm brownie served with creamy ice cream.",
        price: "₹260",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98TaLzGSZiZo0_QmmUzkzg8P2RiTLeah-3eZxKpk6QZkUauo7yd1pP-4&s=10",
      },
    ],
  },
  {
    id: "drinks",
    number: "04",
    title: "Cold Drinks",
    subtitle: "Cool, bright and refreshing.",
    items: [
      {
        name: "Iced Latte",
        description: "Chilled espresso with smooth milk and ice.",
        price: "₹190",
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=85",
        featured: true,
      },
      {
        name: "Berry Cooler",
        description: "Fresh berries with a chilled fruity finish.",
        price: "₹210",
        image:
          "https://www.martinellis.com/wp-content/uploads/2020/04/Berry-Apple-Cooler_5835-retouched-681x1024.jpg",
      },
      {
        name: "Mint Lemonade",
        description: "Fresh lemon and mint served over ice.",
        price: "₹170",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAD5Oi9WcphY0ZS9I0hIDdvzmUjJs8cbOWiXadYkiQMS9jGVd0SOzHVO2&s=10",
      },
      {
        name: "Passion Fruit Fizz",
        description: "Tropical passion fruit with sparkling soda.",
        price: "₹220",
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Peach Iced Tea",
        description: "Refreshing black tea with sweet peach.",
        price: "₹180",
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=85",
      },
      {
        name: "Strawberry Soda",
        description: "Sparkling strawberry refreshment served chilled.",
        price: "₹200",
        image:
          "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=300&q=85",
      },
    ],
  },
];

function FullMenuPage() {
  return (
    <main className="brewspot-menu-list-page">
      {/* HERO */}
      <section className="brewspot-menu-intro">
        <div className="container">
          <div className="brewspot-menu-intro-inner">
            <span className="menu-kicker">
              BREWSPOT · FULL MENU
            </span>
            <h1>
              Good taste,
              <br />
              simply served.
            </h1>
            <p>
              Explore our coffee, food, desserts and refreshing
              drinks — thoughtfully prepared for every moment.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <div className="brewspot-menu-category-bar">
        <div className="container">
          <div className="brewspot-menu-category-links">
            {menuSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
              >
                <span>{section.number}</span>
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MENU */}
      <section className="brewspot-menu-list-content">
        <div className="container">
          {menuSections.map((section) => (
            <section
              className="brewspot-menu-list-section"
              id={section.id}
              key={section.id}
            >
              <div className="brewspot-menu-section-header">
                <div className="brewspot-menu-section-number">
                  {section.number}
                </div>
                <div className="brewspot-menu-section-title">
                  <span>{section.subtitle}</span>
                  <h2>{section.title}</h2>
                </div>
              </div>

              <div className="brewspot-menu-items">
                {section.items.map((item, index) => (
                  <article
                    className={`brewspot-menu-item ${
                      item.featured
                        ? "brewspot-menu-item-featured"
                        : ""
                    }`}
                    key={item.name}
                  >
                    <div className="brewspot-menu-item-left">
                      <div className="brewspot-menu-item-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="brewspot-menu-item-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                        />
                      </div>

                      <div className="brewspot-menu-item-info">
                        <div className="brewspot-menu-item-title-row">
                          <h3>{item.name}</h3>
                          {item.featured && (
                            <span className="brewspot-menu-featured">
                              SIGNATURE
                            </span>
                          )}
                        </div>
                        <p>{item.description}</p>
                      </div>
                    </div>

                    <div className="brewspot-menu-item-right">
                      <strong>{item.price}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className="brewspot-menu-note">
            <span>BREWSPOT NOTE</span>
            <p>
              Please let our team know about any food preferences
              or special requests before ordering.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FullMenuPage;