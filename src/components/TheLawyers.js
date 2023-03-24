import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PrismicRichText } from "@prismicio/react";

const TheLawyers = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicGliAvvocati {
        nodes {
          data {
            bio_avvocato {
              richText
            }
            immagine_avvocato {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                height: 400
                width: 300
              )
              alt
            }
            nome_avvocato {
              text
            }
          }
        }
      }
    }
  `);
  const avvocati = data.allPrismicGliAvvocati.nodes;

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-3 mt-16">
        {avvocati.map((avvocato) => {
          const pathToImage = getImage(avvocato.data.immagine_avvocato);
          return (
            <div
              className="md:flex last:flex-row-reverse border-b-2 border-greyTransparent py-10"
              key={avvocato.data.nome_avvocato.text}
            >
              <div className="w-9/12 md:w-1/3 lg:w-1/5">
                <GatsbyImage
                  image={pathToImage}
                  className="rounded-md h-full w-full"
                  alt={avvocato.data.nome_avvocato.text}
                />
              </div>
              <div className="mt-10 md:mt-0 md:px-10 md:w-2/3">
                <h3 className="text-2xl text-blue-dark">
                  {avvocato.data.nome_avvocato.text}
                </h3>
                <span className="block w-20 mt-3 mb-5 border-solid border-gold border-b-4"></span>
                <div className="text-grey mt-6">
                  <PrismicRichText
                    field={avvocato.data.bio_avvocato.richText}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TheLawyers;

/*    <span className="block my-10 w-11/12 xl:mx-auto border-solid border-greyTransparent border-b-2"></span>*/
