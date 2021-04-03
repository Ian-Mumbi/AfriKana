import React from "react"
import Navigation from "../components/Navigation/NavigationComponent/NavigationComponent"

const TestingNavigation = () => {
  const navItems = [
    { label: "About us", path: "/about" },
    { label: "Your Benefits", path: "/about" },
    { label: "Popular Tours", path: "/about" },
    { label: "Book Now", path: "/about" },
  ]
  return <Navigation navItems={navItems} />
}

export default TestingNavigation
