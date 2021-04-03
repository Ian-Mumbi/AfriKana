import React from "react"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"

const Mission = () => {
  return (
    <Layout>
      <Helmet title="Mission" />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Mission</h2>
        <p className="paragraph">
          Our mission is to serve individuals and families in the poorest
          communities in our locale and the country at large. Drawing our
          strength from our diversity, resources and experience. We promote
          innovative solutions and are advocates for global responsibilities.
        </p>
      </div>
    </Layout>
  )
}

export default Mission
