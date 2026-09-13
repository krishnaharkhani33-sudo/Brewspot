import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* =========================
   MAIN COMPONENTS
========================= */

import Navbar from "./Brewspot/Navbar";
import Hero from "./Brewspot/Hero";
import About from "./Brewspot/About";
import Menu from "./Brewspot/Menu";
import WhyChoose from "./Brewspot/WhyChoose";
import Gallery from "./Brewspot/Gallery";
import Offers from "./Brewspot/Offers";
import Reviews from "./Brewspot/Reviews";
import Contact from "./Brewspot/Contact";
import Footer from "./Brewspot/Footer";

/* =========================
   MENU PAGES
========================= */

import MenuPage from "./Pages/MenuPage";
import FullMenuPage from "./Pages/FullMenuPage";
import CoffeePage from "./Pages/CoffeePage";
import FoodPage from "./Pages/FoodPage";
import DessertsPage from "./Pages/DessertsPage";
import ColdDrinksPage from "./Pages/ColdDrinksPage";

/* =========================
   SEPARATE PAGES
========================= */

import OurStoryPage from "./Brewspot/OurStory";
import GalleryPage from "./Brewspot/Gallery";
import ContactPage from "./Brewspot/Contact";

/* =========================
   HOME PAGE
========================= */

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <WhyChoose />
      <Gallery />
      <Offers />
      <Reviews />
      <Contact />
    </>
  );
}

/* =========================
   APP
========================= */

function App() {
  return (
    <BrowserRouter>
      {/* ================= HEADER ================= */}

      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= MENU PAGES ================= */}

        <Route
          path="/menu"
          element={<MenuPage />}
        />

        <Route
          path="/menu/full-menu"
          element={<FullMenuPage />}
        />

        <Route
          path="/menu/coffee"
          element={<CoffeePage />}
        />

        <Route
          path="/menu/food"
          element={<FoodPage />}
        />

        <Route
          path="/menu/desserts"
          element={<DessertsPage />}
        />

        <Route
          path="/menu/cold-drinks"
          element={<ColdDrinksPage />}
        />

        {/* ================= OUR STORY ================= */}

        <Route
          path="/our-story"
          element={<OurStoryPage />}
        />

        {/* ================= GALLERY ================= */}

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />

        {/* ================= OFFERS ================= */}

        <Route
          path="/offers"
          element={<Offers />}
        />

        {/* ================= CONTACT ================= */}

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>

      {/* ================= FOOTER ================= */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;