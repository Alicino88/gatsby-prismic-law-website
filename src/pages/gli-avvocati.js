import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";
import HeaderSec from "../components/HeaderSec.js";
import TheLawyers from "../components/TheLawyers.js";

const LoStudio = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "team.jpg" }) {
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
      <HeaderSec
        descrizione="Professionisti del settore legale"
        titolo="Il team"
        image={pic}
      />
      <TheLawyers />
    </Layout>
  );
};

export default LoStudio;
