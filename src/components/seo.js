/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, title, children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  );

  /*if there is a title being passed as a prop then that one is being used otherwise the default title from the query is set */
  const metaTitle = title || data.site.siteMetadata.title;
  const metaDescription = description || data.site.siteMetadata.description;
  const pic = data.site.siteMetadata.image;
  const url = data.site.siteMetadata.siteUrl;

  console.log(pic);

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:image" content={pic} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="image" content={pic} />
    </>
  );
}

export default SEO;
