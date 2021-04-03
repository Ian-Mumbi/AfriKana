import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./Header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          foundationName
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.text__box}>
        <h1 className="heading-primary">
          <span className="heading-primary--main heading-primary--main--different">
            {data.site.siteMetadata.foundationName}
          </span>
          <span className="heading-primary--sub">each one mentor one</span>
        </h1>

        <Link to="/about" className="btn btn--white btn--animated">
          Learn more about us
        </Link>
      </div>
    </header>
  )
}

export default Header
