import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"

const SellingPoints = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicSellingpoint {
        nodes {
          data {
            description {
              text
            }
            icon {
              gatsbyImageData(layout: CONSTRAINED, width: 125)
            }
            title {
              text
            }
          }
        }
      }
    }
  `)
  const sellingPoints = data.allPrismicSellingpoint.nodes

  const [style, setStyle] = useState(null)
  const applyStyle = () => {
    setStyle({
      transition: "all .5s ease-out",
      transform: "rotateY(360deg)",
    })
  }

  return (
    <section className="lg:flex text-center mx-auto max-w-screen-xl py-16">
      {sellingPoints.map(sellingPoint => {
        const pathToImage = getImage(sellingPoint.data.icon)
        return (
          <div className="mx-10 mb-10 md:w-2/3 md:mx-auto lg:w-1/4">
            <div style={style} onMouseEnter={applyStyle}>
              <GatsbyImage image={pathToImage} />
            </div>
            <h2 className="text-blue-dark text-lg mb-3">
              {sellingPoint.data.title.text}
            </h2>
            <p className="text-grey">{sellingPoint.data.description.text}</p>
          </div>
        )
      })}
    </section>
  )
}

export default SellingPoints
