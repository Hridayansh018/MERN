import React from "react"
import HeroSection from "./components/HeroSection.jsx"
import Navbar from "./components/Navbar.jsx"
import Dishes from "./components/Dishes.jsx"
import About from "./components/about.jsx"
import Mission from "./components/Mission.jsx"

export default function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
    </main>
  )
}