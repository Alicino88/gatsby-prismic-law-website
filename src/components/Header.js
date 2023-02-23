import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header
    className="w-screen relative overflow-hidden mt-32"
    style={{ height: "60vh", minHeight: "500px" }}
  >
    <StaticImage
      src="../images/milano_galleria1.jpg"
      placeholder="blurred"
      layout="constrained"
      className="w-full h-full"
      imgClassName="animate-zoomin"
      alt=""
    />
    <div className="bg-blue-transparent text-center absolute top-0 right-0 bottom-0 left-0">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 lg:w-3/5 max-w-screen-md">
        <p className="text-white text-sm sm:text-base font-extrabold uppercase">
          Studio legale Cassani e Marchetti
        </p>
        <span className="block w-20 mx-auto mt-4 mb-5 border-solid border-gold border-b-4"></span>
        <h1 className="text-white leading-normal md:leading-normal lg:leading-normal text-3xl md:text-4xl lg:text-5xl font-medium">
          I tuoi esperti in diritto civile a Milano e Paderno Dugnano
        </h1>
      </div>
    </div>
  </header>
);

export default Header;
