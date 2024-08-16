import React from "react"
import HeroSection from "./components/HeroSection.jsx"
import Navbar from "./components/Navbar.jsx"
import Dishes from "./components/Dishes.jsx"

export default function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
    </main>
  )
}