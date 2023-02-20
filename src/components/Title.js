import * as React from "react"
const Title = ({ title, id }) => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl" id={id}>
        {title}
      </h1>
      <span className="block w-20 mx-auto mt-4 mb-8 border-solid border-gold border-b-4"></span>
    </>
  )
}

export default Title
