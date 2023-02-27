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
      loading="eager"
    />
    <div className="bg-blue-transparent text-center absolute top-0 right-0 bottom-0 left-0">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 lg:w-3/5 max-w-screen-md">
        <p className="text-white text-sm sm:text-base font-extrabold uppercase">
          Studio legale Cassani & Marchetti
        </p>
        <span className="flex justify-center mt-6 -mb-6 mx-auto text-gold text-5xl">
          "
        </span>
        <h1 className="text-white leading-normal md:leading-normal lg:leading-normal text-3xl md:text-4xl lg:text-5xl font-medium">
          Non esistono problemi, ci sono soltanto soluzioni
        </h1>
        <p className="text-xs text-white italic mt-3">- André Gide</p>
      </div>
    </div>
  </header>
);

export default Header;
