/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Avvocato civilista Milano | Studio legale Cassani & Marchetti`,
    description: `Specializzato in diritto civile, lo studio legale Cassani & Marchetti offre un servizio altamente qualificato a Milano e Paderno Dugnano.`,
    image: `/logo-white-bg.png`,
    siteUrl: `https://www.alicemoretti.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    `gatsby-plugin-perf-budgets`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    /*to use google fonts
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: "async",
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&display=swap`,
          },
          {
            name: `Merriweather`,
            file: `https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap`,
          },
        ],
      },
    },*/
  ],
};
