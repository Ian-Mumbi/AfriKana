import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import image2 from "./charity-1.jpg"
import image3 from "./download-4.png"
import image4 from "./charity-3.jpg"
import Event from "./Event"

const About = () => {
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
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Events</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          {data.allMarkdownRemark.edges.map(edge => {
            const { title, date } = edge.node.frontmatter
            return (
              <React.Fragment key={title + date}>
                <Event event={{ title, date }} />
                <Link
                  to={`/events/${edge.node.fields.slug}`}
                  className="btn-text u-margin-bottom-small"
                >
                  Read more &rarr;
                </Link>
              </React.Fragment>
            )
          })}
          <div>
            {data.allMarkdownRemark.edges.length > 2 && (
              <Link to="/foundation-events" className="btn btn--blue">
                View All Events &rarr;
              </Link>
            )}
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={image2}
              alt="Children smiling"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={image3}
              alt="Children smiling"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={image4}
              alt="Children smiling"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
