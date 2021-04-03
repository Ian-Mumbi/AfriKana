import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"
import { formatDate } from "../utils/dateFormat"

const FoundationEvents = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet title="Foundation Events" />

      {data.allMarkdownRemark.edges.map((edge, i) => (
        <div className="feature-box" key={i}>
          <h3 className="heading-tertiary u-margin-bottom-small">
            {edge.node.frontmatter.title}
          </h3>
          <p className="paragraph">{formatDate(edge.node.frontmatter.date)}</p>
          <Link
            to={`/events/${edge.node.fields.slug}`}
            className="btn-text u-margin-bottom-small"
          >
            Read more &rarr;
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default FoundationEvents
