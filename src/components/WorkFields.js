import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import Title from "./Title";

const WorkFields = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicAreeDiCompetenza(
        sort: { fields: data___titolo___text, order: ASC }
      ) {
        nodes {
          data {
            icona {
              gatsbyImageData(
                width: 50
                height: 50
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
            titolo {
              text
            }
            descrizione {
              text
            }
          }
        }
      }
    }
  `);
  const workFields = data.allPrismicAreeDiCompetenza.nodes;
  /*the card has a width w-64 on mobile then as soon as the grid kicks in the width is auto so to respect the column and row gap.*/

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section className="text-center py-16">
      <Title title="Aree di competenza" />

      <div
        className="mx-auto md:grid md:grid-cols-2 gap-7 lg:grid-cols-4 md:max-w-lg lg:max-w-5xl py-16"
        ref={ref}
      >
        {workFields.map((field) => {
          const pathToImage = getImage(field.data.icona);

          return (
            <div
              className={`rounded-md shadow-md w-64 md:w-auto mx-auto mb-8 md:mb-0 opacity-0 -translate-y-1/2 transition-all duration-1000 ease-out ${
                inView ? "translate-y-0 opacity-100" : ""
              } `}
              key={field.data.titolo.text}
            >
              <div className="bg-blue-light rounded-t-md py-10">
                <GatsbyImage image={pathToImage} alt="" />
              </div>
              <div className="p-5 h-64 text-left">
                <h2 className="text-blue-dark text-lg mb-3">
                  {field.data.titolo.text}
                </h2>
                <p className="text-grey ">{field.data.descrizione.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkFields;
