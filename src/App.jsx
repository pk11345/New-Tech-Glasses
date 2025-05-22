import React from 'react'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-500">
      <Navbar />
      <HeroSection />
    </div>
    </>
  )
}

export default App