import * as React from "react"

const Container = ({ children }) => {
  return (
    <section className="bg-blue-light py-20">
      <div className="py-1 px-3 text-center mx-auto md:w-3/4 lg:w-3/5 max-w-screen-md">
        {children}
      </div>
    </section>
  )
}

export default Container

/*
className={classnames("bg-${bgColor} text*/
