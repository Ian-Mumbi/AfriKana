import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FooterItem from "./FooterItem."

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          foundationName
        }
      }
    }
  `)
  console.log("DATA ", data)
  console.log("ITEMS ", props)
  return (
    <footer className="footer">
      <div className="footer__logo-box"></div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {props.items.map((item, index) => (
                <FooterItem item={item} key={item + index} />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            {data.site.siteMetadata.foundationName} Copyright &copy; 2021
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
