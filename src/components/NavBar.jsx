import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons (lightweight alternative to Font Awesome)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white">New Tech Glasses</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          <li><a href="#location" className="hover:text-yellow-300">Location</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-4 text-white font-medium bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 p-4 rounded-md">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          <li><a href="#location" className="hover:text-yellow-300">Location</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
