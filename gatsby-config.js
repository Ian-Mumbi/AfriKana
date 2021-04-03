/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    foundationName: "AfriKana",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "source",
        path: `${__dirname}/src/foundation-events`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "actualImages",
        path: `${__dirname}/src/img`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 400,
              maxHeight: 400,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
