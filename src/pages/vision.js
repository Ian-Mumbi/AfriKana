import React from "react"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"

const Vision = () => {
  return (
    <Layout>
      <Helmet title="Vision" />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Vision</h2>
        <p className="paragraph">
          We seek a wand of hope, tolerance and social justice where poverty has
          been overcome and people live in dignity and security.
        </p>
      </div>
    </Layout>
  )
}

export default Vision
