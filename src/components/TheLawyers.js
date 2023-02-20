import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TheLawyers = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicGliAvvocati {
        nodes {
          data {
            bio_avvocato {
              text
            }
            immagine_avvocato {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
            nome_avvocato {
              text
            }
          }
        }
      }
    }
  `)
  const avvocati = data.allPrismicGliAvvocati.nodes
  console.log(avvocati)
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="lg:flex py-16">
        <div className="px-3 md:pr-32 lg:pr-0 lg:w-1/3">
          <h2 className="text-5xl text-blue-dark">La storia</h2>
          <p className="text-grey mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="px-3 mt-16 lg:mt-0 lg:w-2/3">
          {avvocati.map(avvocato => {
            const pathToImage = getImage(avvocato.data.immagine_avvocato)
            return (
              <div>
                <div className="md:flex lg:px-10 lg:pl-10">
                  <div className="w-9/12 md:w-1/3">
                    <GatsbyImage
                      image={pathToImage}
                      className="rounded-md h-full w-full"
                    />
                  </div>
                  <div className="mt-10 md:mt-0 md:px-10 md:w-2/3">
                    <h3 className="text-2xl text-blue-dark">
                      {avvocato.data.nome_avvocato.text}
                    </h3>
                    <span className="block w-20 mt-3 mb-5 border-solid border-gold border-b-4"></span>
                    <p className="text-grey mt-6">
                      {avvocato.data.bio_avvocato.text}
                    </p>
                  </div>
                </div>
                <span className="block my-10 w-11/12 xl:mx-auto border-solid border-greyTransparent border-b-2"></span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TheLawyers
