import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Navbar as BSNavbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
  Button,
  Form,
  Modal,
  InputGroup,
  Dropdown,
} from "react-bootstrap";

import {
  FiCoffee,
  FiSearch,
  FiUser,
  FiSun,
  FiMoon,
  FiMenu,
  FiMapPin,
  FiCalendar,
  FiChevronRight,
  FiLogIn,
  FiUserPlus,
  FiPackage,
  FiX,
  FiImage,
  FiTag,
  FiMail,
} from "react-icons/fi";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* =====================================================
     DARK MODE
  ===================================================== */

  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("brewspot-theme") === "dark"
    );
  });

  /* =====================================================
     MODALS / MOBILE
  ===================================================== */

  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showBooking, setShowBooking] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  /* =====================================================
     ACTIVE NAVIGATION
  ===================================================== */

  const getInitialActive = useCallback(() => {
    const path = location.pathname;

    /* HOME */
    if (path === "/") {
      return "home";
    }

    /* MENU */
    if (
      path === "/menu" ||
      path.startsWith("/menu/")
    ) {
      return "menu";
    }

    /* OUR STORY */
    if (path === "/our-story") {
      return "story";
    }

    /* GALLERY */
    if (path === "/gallery") {
      return "gallery";
    }

    /* OFFERS */
    if (path === "/offers") {
      return "offers";
    }

    /* CONTACT */
    if (path === "/contact") {
      return "contact";
    }

    return "home";
  }, [location.pathname]);

  const [activeNav, setActiveNav] = useState(() =>
    getInitialActive()
  );

  useEffect(() => {
    setActiveNav(getInitialActive());
  }, [getInitialActive]);

  /* =====================================================
     DARK / LIGHT MODE
  ===================================================== */

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("brewspot-dark");

      localStorage.setItem(
        "brewspot-theme",
        "dark"
      );
    } else {
      document.body.classList.remove(
        "brewspot-dark"
      );

      localStorage.setItem(
        "brewspot-theme",
        "light"
      );
    }
  }, [darkMode]);

  /* =====================================================
     ESC KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowSearch(false);
        setShowOffcanvas(false);
        setShowBooking(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMobileMenu = () => {
    setShowOffcanvas(false);
  };

  /* =====================================================
     HOME NAVIGATION
  ===================================================== */

  const goHome = () => {
    closeMobileMenu();
    setActiveNav("home");

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  };

  /* =====================================================
     PAGE NAVIGATION
  ===================================================== */

  const goToPage = (path, navName) => {
    closeMobileMenu();
    setActiveNav(navName);

    if (location.pathname !== path) {
      navigate(path);

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /* =====================================================
     EXPLORE MENU PAGE
  ===================================================== */

  const goToMenuPage = () => {
    goToPage("/menu", "menu");
  };

  /* =====================================================
     FULL MENU PAGE
  ===================================================== */

  const goToFullMenu = () => {
    goToPage(
      "/menu/full-menu",
      "menu"
    );
  };

  /* =====================================================
     CATEGORY PAGES
  ===================================================== */

  const goToCategory = (path) => {
    goToPage(path, "menu");
  };

  /* =====================================================
     OUR STORY
  ===================================================== */

  const goToOurStory = () => {
    goToPage(
      "/our-story",
      "story"
    );
  };

  /* =====================================================
     GALLERY
  ===================================================== */

  const goToGallery = () => {
    goToPage(
      "/gallery",
      "gallery"
    );
  };

  /* =====================================================
     OFFERS
  ===================================================== */

  const goToOffers = () => {
    goToPage(
      "/offers",
      "offers"
    );
  };

  /* =====================================================
     CONTACT
  ===================================================== */

  const goToContact = () => {
    goToPage(
      "/contact",
      "contact"
    );
  };

  /* =====================================================
     SEARCH
  ===================================================== */

  const handleSearch = (event) => {
    event.preventDefault();

    if (!searchValue.trim()) {
      return;
    }

    alert(
      `Searching for "${searchValue}" ☕`
    );

    setSearchValue("");
    setShowSearch(false);
  };

  const selectPopularSearch = (item) => {
    setSearchValue(item);
  };

  /* =====================================================
     BOOKING
  ===================================================== */

  const handleBooking = (event) => {
    event.preventDefault();

    alert(
      "Your table reservation request has been submitted successfully! ☕"
    );

    setShowBooking(false);
  };

  /* =====================================================
     THEME
  ===================================================== */

  const toggleTheme = () => {
    setDarkMode(
      (previousMode) => !previousMode
    );
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <BSNavbar
        expand="lg"
        sticky="top"
        className={`brewspot-navbar ${
          darkMode
            ? "brewspot-navbar-dark"
            : ""
        }`}
      >
        <Container>
          {/* ================= BRAND ================= */}

          <BSNavbar.Brand
            href="/"
            className="brewspot-brand"
            onClick={(e) => {
              e.preventDefault();
              goHome();
            }}
          >
            <div className="brewspot-logo">
              <FiCoffee />
            </div>

            <div className="brewspot-brand-text">
              <span className="brewspot-name">
                BREWSPOT
              </span>

              <small>
                COFFEE • FOOD • MOMENTS
              </small>
            </div>
          </BSNavbar.Brand>

          {/* =================================================
              MOBILE TOGGLE
          ================================================= */}

          <Button
            variant="link"
            className="brewspot-mobile-toggle d-lg-none"
            onClick={() =>
              setShowOffcanvas(true)
            }
            aria-label="Open menu"
          >
            <FiMenu />
          </Button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <BSNavbar.Collapse
            id="brewspot-navbar"
          >
            <Nav className="brewspot-main-nav mx-auto align-items-lg-center">
              {/* ================= HOME ================= */}

              <Nav.Link
                href="/"
                className={`brewspot-nav-link ${
                  activeNav === "home"
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  goHome();
                }}
              >
                Home
              </Nav.Link>

              {/* ================= MENU ================= */}

              <NavDropdown
                title="Menu"
                id="brewspot-menu-dropdown"
                className={`brewspot-dropdown ${
                  activeNav === "menu"
                    ? "active"
                    : ""
                }`}
              >
                <NavDropdown.Item
                  onClick={goToFullMenu}
                >
                  <FiCoffee />
                  Full Menu
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={() =>
                    goToCategory(
                      "/menu/coffee"
                    )
                  }
                >
                  <FiCoffee />
                  Coffee & Espresso
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() =>
                    goToCategory(
                      "/menu/food"
                    )
                  }
                >
                  Food & Snacks
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() =>
                    goToCategory(
                      "/menu/desserts"
                    )
                  }
                >
                  Desserts
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() =>
                    goToCategory(
                      "/menu/cold-drinks"
                    )
                  }
                >
                  Cold Drinks
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  className="brewspot-view-menu"
                  onClick={goToMenuPage}
                >
                  Explore Full Menu
                  <FiChevronRight />
                </NavDropdown.Item>
              </NavDropdown>

              {/* ================= OUR STORY ================= */}

              <Nav.Link
                href="/our-story"
                className={`brewspot-nav-link ${
                  activeNav === "story"
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  goToOurStory();
                }}
              >
                Our Story
              </Nav.Link>

              {/* ================= GALLERY ================= */}

              <Nav.Link
                href="/gallery"
                className={`brewspot-nav-link ${
                  activeNav === "gallery"
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  goToGallery();
                }}
              >
                Gallery
              </Nav.Link>

              {/* ================= OFFERS ================= */}

              <Nav.Link
                href="/offers"
                className={`brewspot-nav-link ${
                  activeNav === "offers"
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  goToOffers();
                }}
              >
                Offers

                <span className="brewspot-new-badge">
                  NEW
                </span>
              </Nav.Link>

              {/* ================= CONTACT ================= */}

              <Nav.Link
                href="/contact"
                className={`brewspot-nav-link ${
                  activeNav === "contact"
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  goToContact();
                }}
              >
                Contact
              </Nav.Link>
            </Nav>

            {/* =================================================
                RIGHT SIDE ACTIONS
            ================================================= */}

            <div className="brewspot-actions">
              <button
                type="button"
                className="brewspot-action search-action"
                onClick={() =>
                  setShowSearch(true)
                }
                aria-label="Search"
                title="Search"
              >
                <FiSearch />
              </button>

              <Dropdown align="end">
                <Dropdown.Toggle
                  as="button"
                  className="brewspot-action account-action"
                  aria-label="Account"
                  title="Account"
                >
                  <FiUser />
                </Dropdown.Toggle>

                <Dropdown.Menu className="brewspot-account-menu">
                  <Dropdown.Header>
                    Welcome to Brewspot ☕
                  </Dropdown.Header>

                  <Dropdown.Item
                    href="#login"
                    onClick={() =>
                      alert(
                        "Login page coming soon!"
                      )
                    }
                  >
                    <FiLogIn />
                    Login
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="#register"
                    onClick={() =>
                      alert(
                        "Registration coming soon!"
                      )
                    }
                  >
                    <FiUserPlus />
                    Create Account
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item
                    href="#orders"
                    onClick={() =>
                      alert(
                        "Your orders will appear here!"
                      )
                    }
                  >
                    <FiPackage />
                    My Orders
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <button
                type="button"
                className="brewspot-action theme-action"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={
                  darkMode
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {darkMode ? (
                  <FiSun />
                ) : (
                  <FiMoon />
                )}
              </button>

              <button
                type="button"
                className="brewspot-book-btn"
                onClick={() =>
                  setShowBooking(true)
                }
              >
                <FiCalendar />

                <span>
                  Book a Table
                </span>
              </button>
            </div>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      {/* =====================================================
          MOBILE OFFCANVAS
      ===================================================== */}

      <Offcanvas
        show={showOffcanvas}
        onHide={closeMobileMenu}
        placement="end"
        className={`brewspot-offcanvas ${
          darkMode
            ? "brewspot-offcanvas-dark"
            : ""
        }`}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="brewspot-mobile-brand">
              <div className="brewspot-logo">
                <FiCoffee />
              </div>

              <div>
                <strong>
                  BREWSPOT
                </strong>

                <small>
                  Coffee • Food • Moments
                </small>
              </div>
            </div>
          </Offcanvas.Title>

          <button
            type="button"
            className="brewspot-mobile-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {/* MOBILE SEARCH */}

          <Form
            className="brewspot-mobile-search"
            onSubmit={handleSearch}
          >
            <InputGroup>
              <Form.Control
                placeholder="Search coffee, food..."
                value={searchValue}
                onChange={(event) =>
                  setSearchValue(
                    event.target.value
                  )
                }
              />

              <Button type="submit">
                <FiSearch />
              </Button>
            </InputGroup>
          </Form>

          {/* MOBILE NAVIGATION */}

          <Nav className="flex-column brewspot-mobile-nav">
            <Nav.Link
              href="/"
              className={
                activeNav === "home"
                  ? "active"
                  : ""
              }
              onClick={(e) => {
                e.preventDefault();
                goHome();
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              className={
                activeNav === "menu"
                  ? "active"
                  : ""
              }
              onClick={goToFullMenu}
            >
              <FiCoffee />
              Full Menu
            </Nav.Link>

            <Nav.Link
              onClick={goToMenuPage}
            >
              <FiChevronRight />
              Explore Menu
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                goToCategory(
                  "/menu/coffee"
                )
              }
            >
              <FiCoffee />
              Coffee & Espresso
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                goToCategory(
                  "/menu/food"
                )
              }
            >
              Food & Snacks
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                goToCategory(
                  "/menu/desserts"
                )
              }
            >
              Desserts
            </Nav.Link>

            <Nav.Link
              onClick={() =>
                goToCategory(
                  "/menu/cold-drinks"
                )
              }
            >
              Cold Drinks
            </Nav.Link>

            <Nav.Link
              className={
                activeNav === "story"
                  ? "active"
                  : ""
              }
              onClick={goToOurStory}
            >
              Our Story
            </Nav.Link>

            <Nav.Link
              className={
                activeNav === "gallery"
                  ? "active"
                  : ""
              }
              onClick={goToGallery}
            >
              <FiImage />
              Gallery
            </Nav.Link>

            <Nav.Link
              className={
                activeNav === "offers"
                  ? "active"
                  : ""
              }
              onClick={goToOffers}
            >
              <FiTag />
              Offers

              <span className="brewspot-new-badge">
                NEW
              </span>
            </Nav.Link>

            <Nav.Link
              className={
                activeNav === "contact"
                  ? "active"
                  : ""
              }
              onClick={goToContact}
            >
              <FiMail />
              Contact
            </Nav.Link>
          </Nav>

          {/* MOBILE ACTIONS */}

          <div className="brewspot-mobile-actions">
            <button
              type="button"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <FiSun />
              ) : (
                <FiMoon />
              )}

              <span>
                {darkMode
                  ? "Light Mode"
                  : "Dark Mode"}
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                alert(
                  "Account feature coming soon!"
                )
              }
            >
              <FiUser />

              <span>
                Account
              </span>
            </button>
          </div>

          {/* MOBILE BOOK TABLE */}

          <button
            type="button"
            className="brewspot-mobile-book"
            onClick={() => {
              setShowBooking(true);
              closeMobileMenu();
            }}
          >
            <FiCalendar />
            Book a Table
          </button>

          {/* LOCATION */}

          <div className="brewspot-mobile-location">
            <FiMapPin />

            <div>
              <strong>
                Visit Brewspot
              </strong>

              <small>
                Your neighborhood coffee destination
              </small>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* =====================================================
          SEARCH MODAL
      ===================================================== */}

      <Modal
        show={showSearch}
        onHide={() =>
          setShowSearch(false)
        }
        centered
        className="brewspot-search-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FiSearch />
            Search Brewspot
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSearch}>
            <InputGroup size="lg">
              <Form.Control
                autoFocus
                placeholder="Search coffee, pizza, dessert..."
                value={searchValue}
                onChange={(event) =>
                  setSearchValue(
                    event.target.value
                  )
                }
              />

              <Button type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>

          <div className="brewspot-popular-searches">
            <small>
              Popular searches
            </small>

            <div>
              {[
                "Cappuccino",
                "Cold Coffee",
                "Brownie",
                "Pizza",
              ].map((item) => (
                <Button
                  key={item}
                  variant="outline-secondary"
                  onClick={() =>
                    selectPopularSearch(
                      item
                    )
                  }
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* =====================================================
          BOOKING MODAL
      ===================================================== */}

      <Modal
        show={showBooking}
        onHide={() =>
          setShowBooking(false)
        }
        centered
        className="brewspot-booking-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FiCalendar />
            Reserve Your Table
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="brewspot-booking-text">
            Plan your perfect coffee moment at Brewspot.
          </p>

          <Form
            onSubmit={handleBooking}
          >
            <Form.Group className="mb-3">
              <Form.Label>
                Your Name
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Email Address
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Date
                  </Form.Label>

                  <Form.Control
                    type="date"
                    required
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Time
                  </Form.Label>

                  <Form.Control
                    type="time"
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>
                Number of Guests
              </Form.Label>

              <Form.Select required>
                <option value="">
                  Select guests
                </option>

                <option value="1">
                  1 Guest
                </option>

                <option value="2">
                  2 Guests
                </option>

                <option value="3">
                  3 Guests
                </option>

                <option value="4">
                  4 Guests
                </option>

                <option value="5">
                  5 Guests
                </option>

                <option value="6">
                  6+ Guests
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                Special Request
              </Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Birthday, window seat, celebration..."
              />
            </Form.Group>

            <Button
              type="submit"
              className="brewspot-confirm-booking w-100"
            >
              Confirm Reservation
              <FiChevronRight />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;