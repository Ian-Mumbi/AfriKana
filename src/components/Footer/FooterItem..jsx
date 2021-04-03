import React from "react"
import { Link } from "gatsby"

const FooterItem = props => {
  const { route, routeName } = props.item
  return (
    <li className="footer__item">
      <Link to={`${route}`} className="footer__link">
        {routeName}
      </Link>
    </li>
  )
}

export default FooterItem
