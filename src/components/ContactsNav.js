import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ContactsNav = () => {
  return (
    <div className="bg-blue-dark relative z-40">
      <div className="sm:flex py-4 sm:pl-5 max-w-screen-xl mx-auto">
        <div className="flex justify-center sm:justify-start mb-3 sm:mb-0">
          <StaticImage
            src="../images/phone_gold.png"
            placeholder="blurred"
            layout="constrained"
            width={20}
          />
          <p className="text-white text-sm ml-1">0223-99043123</p>
        </div>
        <div div className="flex justify-center sm:justify-start sm:ml-10">
          <StaticImage
            src="../images/email_gold.png"
            placeholder="blurred"
            layout="constrained"
            width={20}
          />
          <p className="text-white text-sm ml-1">avv.giorgiorossi@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactsNav
