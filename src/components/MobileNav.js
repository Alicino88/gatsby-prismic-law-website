import * as React from "react"
import { Link } from "gatsby"
const MobileNav = ({ isOpen, toggle }) => {
  return (
    <div
      className={`bg-white absolute z-0 left-0 right-0 py-10 px-3 uppercase text-blue-dark text-lg font-semibold -translate-y-full transition duration-1000 ease-out ${
        isOpen ? "translate-y-0 z-20" : ""
      } 
    `}
    >
      <Link to="/#lo-studio" onClick={toggle}>
        <p className="mb-4">Lo studio</p>
      </Link>
      <Link to="/gli-avvocati" onClick={toggle}>
        <p className="mb-4">Avvocati</p>
      </Link>
      <Link to="/#competenze" onClick={toggle}>
        <p className="mb-4">Competenze</p>
      </Link>
      <Link to="/contatti" onClick={toggle}>
        <p className="mb-4">Contatti</p>
      </Link>
    </div>
  )
}

export default MobileNav
