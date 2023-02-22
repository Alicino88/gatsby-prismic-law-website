import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Scrollspy from "react-scrollspy";

const MenuNav = ({ toggle, isOpen }) => {
  return (
    <nav
      className={`bg-white z-40 relative ${!isOpen ? "drop-shadow-md" : ""}`}
    >
      <div className="py-1 px-3 flex items-center justify-between max-w-screen-xl mx-auto">
        <Link to="/" className="cursor-pointer">
          <StaticImage
            src="../images/logo_blue.png"
            placeholder="blurred"
            layout="constrained"
            width={80}
            alt="Studio legale Cassani e Marchetti"
          />
        </Link>

        <ul className="font-semibold text-sm uppercase hidden md:inline-flex">
          <Link to="/#lo-studio" className="mr-8 cursor-pointer text-blue-dark">
            <li>Lo studio</li>
          </Link>

          <Link
            to="/#competenze"
            className="mr-8 cursor-pointer text-blue-dark"
          >
            <li>Competenze</li>
          </Link>
          <Link
            to="/gli-avvocati"
            className="mr-8 cursor-pointer text-blue-dark"
          >
            <li>Gli avvocati</li>
          </Link>
          <Link to="/contatti" className="mr-8 cursor-pointer text-blue-dark">
            <li>Contatti</li>
          </Link>
        </ul>

        {!isOpen && (
          <button onClick={toggle} className="md:hidden">
            <StaticImage
              src="../images/hamburger.png"
              placeholder="blurred"
              layout="constrained"
              width={30}
              alt="menu"
            />
          </button>
        )}
        {isOpen && (
          <button onClick={toggle} className="md:hidden">
            <StaticImage
              src="../images/close.png"
              placeholder="blurred"
              layout="constrained"
              width={30}
              alt="menu"
              className="md:hidden"
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default MenuNav;
