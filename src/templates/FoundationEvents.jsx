import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"
import foundationEventsStyles from "./FoundationEvents.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const FoundationEvents = props => {
  return (
    <Layout>
      <Helmet title={props.data.markdownRemark.frontmatter.title} />
      <h1 className="heading-tertiary">
        {props.data.markdownRemark.frontmatter.title}
      </h1>
      <p className="paragraph">{props.data.markdownRemark.frontmatter.date}</p>
      <div
        className={foundationEventsStyles.container}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <div>
        <Link to="/gallery" className="btn-text u-margin-top-small">
          View Gallery &rarr;
        </Link>
      </div>
      <Link to="/" className="btn-text u-margin-top-small">
        &larr; Back
      </Link>
    </Layout>
  )
}

export default FoundationEvents
