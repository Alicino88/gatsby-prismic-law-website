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
    description: `Esperto in diritto civile, lo studio legale Cassani & Marchetti offre un servizio altamente qualificato con sedi a Milano e Paderno Dugnano.`,
    image: `/logo-white-bg.png`,
    siteUrl: `https://studiolegalecassanimarchetti.it/`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: "gatsby-plugin-iubenda-cookie-footer",
      options: {
        iubendaOptions: {
          adPersonalization: false,
          askConsentAtCookiePolicyUpdate: true,
          floatingPreferencesButtonCaptionColor: "#071838",
          floatingPreferencesButtonColor: "#FFFFFF",
          floatingPreferencesButtonDisplay: "bottom-right",
          perPurposeConsent: true,
          purposes: "1,4",
          siteId: 3034025,
          whitelabel: false,
          cookiePolicyId: 83445824,
          lang: "it",
          banner: {
            acceptButtonCaptionColor: "#FFFFFF",
            acceptButtonColor: "#0073CE",
            acceptButtonDisplay: true,
            backgroundColor: "#FFFFFF",
            closeButtonDisplay: false,
            customizeButtonCaptionColor: "#4D4D4D",
            customizeButtonColor: "#DADADA",
            customizeButtonDisplay: true,
            explicitWithdrawal: true,
            listPurposes: true,
            position: "bottom",
            rejectButtonCaptionColor: "#FFFFFF",
            rejectButtonColor: "#0073CE",
            rejectButtonDisplay: true,
            textColor: "#000000",
            usesThirdParties: false,
            content:
              "Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di misurazione del traffico come specificato nella cookie policy (link presente nel footer).\n\nPuoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento accedendo al pannello delle preferenze cliccando sull'icona verde in basso a destra.",
            rejectButtonCaption: "Continua senza accettare",
          },
        },
      },
    },
    {
      resolve: `gatsby-source-iubenda-documents`,
      options: {
        documentIds: [`97694751`, `97694751/cookie-policy`],
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
