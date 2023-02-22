import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";
import HeaderSec from "../components/HeaderSec.js";
import Seo from "../components/Seo.js";

const LoStudio = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "milano_skyline.jpg" }) {
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
        descrizione="I nostri uffici"
        titolo="Contatti e recapiti"
        image={pic}
      />
      <section>
        <div className="px-3 max-w-screen-xl mx-auto">
          <div className="py-16 md:w-3/4">
            <h1 className="text-blue-dark text-2xl md:text-3xl">
              Studio legale Cassani & Marchetti
            </h1>
            <h2 className="text-blue-dark text-sm uppercase mt-2 mb-6">
              A Milano e Paderno Dugnano
            </h2>
            <p className="text-grey">
              Qui per esempio potresti scrivere il normale iter di contatto, per
              esempio prima telefonata e poi appuntamento, e/o se ricevete solo
              su appuntamento.
            </p>
          </div>
        </div>
        <section
          className="relative w-screen overflow-hidden"
          style={{ height: "60vh", minHeight: "700px" }}
        >
          <StaticImage
            src="../images/phone_old2.jpg"
            placeholder="blurred"
            layout="constrained"
            className="h-full w-full"
          />
          <div class="absolute inset-0 bg-white/60 bg-transparent bg-gradient-to-r from-white/95 to-white/25"></div>
          <div className="text-blue-dark py-16 px-3 absolute inset-0 max-w-screen-xl mx-auto">
            <div className="md:w-3/4">
              <h2 className="text-xl lg:text-2xl">Studio di Milano</h2>
              <span className="block w-20 mt-2 mb-5 border-solid border-gold border-b-4"></span>
              <p>
                Il nostro studio e facilmente raggiungibile a pochi minuti a
                piedi dalla fermata di Amendola, sulla linea rossa.
              </p>
              <div className="mt-6">
                <div className="flex py-2">
                  <StaticImage
                    src="../images/location_blue.png"
                    width={20}
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-3"
                  />
                  <p className="text-sm">Viale Monte Rosa 16, 20149 - MILANO</p>
                </div>
                <div className="flex py-2">
                  <StaticImage
                    src="../images/telephone_blue.png"
                    width={20}
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-3"
                  />
                  <p className="text-sm">02.99043745</p>
                </div>
                <div className="flex py-2 mb-5">
                  <StaticImage
                    src="../images/mail_blue.png"
                    width={20}
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-3"
                  />
                  <p className="text-sm">avv.albertocassani@gmail.com</p>
                </div>
              </div>
            </div>
            <span className="block my-10 w-11/12 border-solid border-gold border-b md:w-3/4"></span>
            <div className="md:w-3/4">
              <h2 className="text-xl lg:text-2xl">Studio di Paderno Dugnano</h2>
              <span className="block w-20 mt-2 mb-5 border-solid border-gold border-b-4"></span>
              <p>
                Il nostro studio e facilmente raggiungibile a pochi minuti a
                piedi dalla fermata di Amendola, sulla linea rossa.
              </p>
              <div className="mt-6">
                <div className="flex py-2">
                  <StaticImage
                    src="../images/location_blue.png"
                    width={20}
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-3"
                  />
                  <p className="text-sm">
                    Viale Repubblica 28, 20037 - PADERNO
                  </p>
                </div>
                <div className="flex py-2">
                  <StaticImage
                    src="../images/telephone_blue.png"
                    width={20}
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-3"
                  />
                  <p className="text-sm">02.99043745</p>
                </div>
                <div className="flex py-2 mb-10">
                  <StaticImage
                    src="../images/mail_blue.png"
                    width={20}
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-3"
                  />
                  <p className="text-sm">avv.albertocassani@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default LoStudio;

export const Head = () => (
  <Seo title="Contatti | Studio legale Cassani & Marchetti" />
);
