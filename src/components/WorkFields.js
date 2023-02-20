import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Title from "./Title"

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
  `)
  const workFields = data.allPrismicAreeDiCompetenza.nodes
  console.log(workFields)
  return (
    <section className="text-center py-16" id="competenze">
      <Title title="Aree di competenza" />
      <div className="mx-auto md:grid md:grid-cols-2 gap-6 lg:grid-cols-3 md:max-w-lg lg:max-w-4xl py-16">
        {workFields.map(field => {
          const pathToImage = getImage(field.data.icona)
          return (
            <div className="rounded-md shadow-md w-64 md:w-auto mx-auto mb-8 md:mb-0">
              <div className="bg-blue-light rounded-t-md py-10">
                <GatsbyImage image={pathToImage} />
              </div>
              <div className="p-5">
                <h2 className="text-blue-dark text-lg mb-3">
                  {field.data.titolo.text}
                </h2>
                <p className="text-grey">{field.data.descrizione.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WorkFields
