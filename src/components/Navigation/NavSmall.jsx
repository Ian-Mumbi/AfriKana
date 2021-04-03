import React from "react"
import { Link } from "gatsby"
import navSmallStyles from "./NavSmall.module.scss"

const NavSmall = () => {
  return (
    <div className={navSmallStyles.container}>
      <div>
        <Link to="/" className={navSmallStyles.brand}>
          AfriKana
        </Link>
      </div>
      <div>
        <ul className={navSmallStyles.linkContainer}>
          <Link to="/about" className={navSmallStyles.link}>
            <li>About us</li>
          </Link>

          <Link className={navSmallStyles.link} to="/executive-summary">
            <li>Executive Summary</li>
          </Link>
          <Link className={navSmallStyles.link} to="/vision">
            <li>Vision</li>
          </Link>
          <Link className={navSmallStyles.link} to="/mission">
            <li>Mission</li>
          </Link>
          <Link className={navSmallStyles.link} to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavSmall
