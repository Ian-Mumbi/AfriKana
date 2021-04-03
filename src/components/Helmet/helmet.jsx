import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
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
    <Helmet title={`${title} | ${data.site.siteMetadata.foundationName}`} />
  )
}

export default Head
