import React from "react";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 min-h-screen text-white">
      <NavBar/>
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
