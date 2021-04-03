import React from "react"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"

const About = () => {
  return (
    <Layout>
      <Helmet title="About" />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About us</h2>
        <p className="paragraph">
          We are a group of young, like-minded individuals who aligned together
          to bring the changes we wanted to see in our society. We felt the need
          to step in with the little that we had to aid the underpriviledged in
          our community. We wish to inspire both the current and future
          generation to be the change makers and leaders in their societies.
        </p>
      </div>
    </Layout>
  )
}

export default About
