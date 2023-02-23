import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import Title from "./Title";

const WorkFields = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicAreeDiCompetenza {
        nodes {
          data {
            icona {
              gatsbyImageData(
                width: 70
                height: 70
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section className="text-center py-16" id="competenze">
      <Title title="Aree di competenza" />
      <div
        className="mx-auto md:grid md:grid-cols-2 gap-6 lg:grid-cols-3 md:max-w-lg lg:max-w-4xl py-16"
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
              <div className="p-5">
                <h2 className="text-blue-dark text-lg mb-3">
                  {field.data.titolo.text}
                </h2>
                <p className="text-grey">{field.data.descrizione.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkFields;
