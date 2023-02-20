import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const HeaderSec = ({ descrizione, titolo, image }) => {
  return (
    <header
      className="relative w-screen overflow-hidden bg-blue-transparent mt-32"
      style={{ height: "40vh", minHeight: "400px" }}
    >
      <GatsbyImage image={image} className="w-full h-full" />
      <div className="flex absolute top-0 right-0 bottom-0 left-0 bg-blue-transparent justify-start items-center">
        <div className="text-white w-full max-w-screen-xl mx-auto px-3 ">
          <p className="uppercase mb-4">{descrizione}</p>
          <h1 className="text-4xl lg:text-5xl">{titolo}</h1>
          <span className="block w-20  mt-4 mb-5 border-solid border-gold border-b-4"></span>
        </div>
      </div>
    </header>
  )
}

export default HeaderSec
