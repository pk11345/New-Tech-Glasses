import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaHome,
  FaTools,
  FaAddressCard,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar = () => {
  const [infoCard, setInfoCard] = useState(null); // 'phone' or 'email' or null
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle smooth scroll to section
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setInfoCard(null); // close card if open
      setMenuOpen(false); // close menu on navigation
    }
  };

  // Close info card on background click
  const handleBgClick = () => setInfoCard(null);

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-4 bg-black bg-opacity-30 backdrop-blur-md fixed w-full z-[999]">
        <h1
          className="text-2xl md:text-3xl font-bold text-white tracking-wide cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          New Tech Glasses
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg items-center">
          <li
            className="hover:text-yellow-300 cursor-pointer flex items-center gap-1"
            onClick={() => handleScroll("home")}
          >
            <FaHome /> Home
          </li>
          <li
            className="hover:text-yellow-300 cursor-pointer flex items-center gap-1"
            onClick={() => handleScroll("services")}
          >
            <FaTools /> Services
          </li>
          <li
            className="hover:text-yellow-300 cursor-pointer flex items-center gap-1"
            onClick={() => handleScroll("contact")}
          >
            <FaAddressCard /> Contact
          </li>
          <li
            className="hover:text-yellow-300 cursor-pointer ml-4"
            onClick={() => setInfoCard(infoCard === "phone" ? null : "phone")}
            title="Contact Number"
          >
            <FaPhone size={22} />
          </li>
          <li
            className="hover:text-yellow-300 cursor-pointer"
            onClick={() => setInfoCard(infoCard === "email" ? null : "email")}
            title="Email Address"
          >
            <FaEnvelope size={22} />
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Dark background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-[998]"
            onClick={toggleMenu}
          ></div>

          {/* Slide-in menu */}
          <div className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-90 backdrop-blur-md z-[999] flex flex-col p-6 space-y-6 text-white">
            <li
              className="hover:text-yellow-300 cursor-pointer flex items-center gap-2 text-xl list-none"
              onClick={() => handleScroll("home")}
            >
              <FaHome /> Home
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer flex items-center gap-2 text-xl list-none"
              onClick={() => handleScroll("services")}
            >
              <FaTools /> Services
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer flex items-center gap-2 text-xl list-none"
              onClick={() => handleScroll("contact")}
            >
              <FaAddressCard /> Contact
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer flex items-center gap-2 text-xl list-none"
              onClick={() => {
                setInfoCard(infoCard === "phone" ? null : "phone");
                toggleMenu();
              }}
              title="Contact Number"
            >
              <FaPhone /> Phone
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer flex items-center gap-2 text-xl list-none"
              onClick={() => {
                setInfoCard(infoCard === "email" ? null : "email");
                toggleMenu();
              }}
              title="Email Address"
            >
              <FaEnvelope /> Email
            </li>
          </div>
        </>
      )}

      {/* Blur background + info card */}
      {infoCard && (
        <>
          {/* Blurred background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={handleBgClick}
          ></div>

          {/* Info card */}
          <div className="fixed top-1/2 left-1/2 z-60 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-8 max-w-sm w-11/12">
            {infoCard === "phone" && (
              <>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaPhone /> Contact Number
                </h2>
                <p className="text-gray-700 text-lg select-text">+91 8383004789</p>
              </>
            )}
            {infoCard === "email" && (
              <>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaEnvelope /> Email Address
                </h2>
                <p className="text-gray-700 text-lg select-text">contact@newtechglasses.com</p>
              </>
            )}
            <button
              onClick={handleBgClick}
              className="mt-6 bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
