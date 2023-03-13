import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";
import HeaderSec from "../components/HeaderSec.js";
import TheLawyers from "../components/TheLawyers.js";
import Seo from "../components/seo.js";

const LoStudio = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cassani-marchetti-giustizia1.jpg" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const pic = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <HeaderSec descrizione="" titolo="Gli Avvocati" image={pic} alt="" />
      <TheLawyers />
    </Layout>
  );
};

export default LoStudio;

export const Head = () => (
  <Seo
    title="Gli avvocati | Studio legale Cassani & Marchetti"
    description="Gli avvocati dello studio legale Cassani & Marchetti uniscono competenze tecniche a una grande passione per il lavoro e l’approfondimento giuridico."
  />
);
