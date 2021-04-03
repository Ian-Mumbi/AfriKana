import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/Helmet/helmet"
import GalleryContainer from "../components/Gallery-test/gallery"

export default ({ data }) => {
  // console.log("Data ", data.allFile)
  return (
    <Layout>
      <Helmet title="Gallery" />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Gallery</h2>
      </div>
      <p className="paragraph u-center-text">
        Welcome to out gallery. It contains photos of events we have organized
        as well as others where we have joined other groups.
      </p>
      <div className="u-make-flex">
        {data.allFile.edges.map((node, i) => {
          return (
            <GalleryContainer key={node.node.name + i}>
              <GatsbyImage
                image={node.node.childImageSharp.gatsbyImageData}
                alt={node.node.name}
              />
            </GalleryContainer>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "actualImages" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(
              width: 300
              height: 200
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
