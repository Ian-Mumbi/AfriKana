const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const foundationEventsTemplate = path.resolve(
    "./src/templates/FoundationEvents.jsx"
  )
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log("RESPONSE ", response.data.allMarkdownRemark.edges)

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: foundationEventsTemplate,
      path: `/events/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
