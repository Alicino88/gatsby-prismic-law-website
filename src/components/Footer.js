import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className="bg-blue-dark h-auto">
      <div className="text-white py-10 px-5 lg:flex md:items-center md:justify-between max-w-screen-xl mx-auto">
        <StaticImage
          src="../images/logo_white.png"
          width={130}
          placeholder="blurred"
          layout="constrained"
          className="mb-8"
          alt="Studio legale Cassani e Marchetti"
        />
        <div className="lg:mr-64 lg:pr-10">
          <h2 className="text-2xl">Contatti e recapiti</h2>
          <span className="block w-20 mt-4 mb-8 border-solid border-gold border-b-4"></span>
          <div className="md:flex">
            <div className="md:mr-10 lg:mr-12">
              <h3 className="mb-5 text-sm">
                Studio di <p className="inline uppercase">Milano</p>
              </h3>
              <div className="flex py-3 border-solid border-greyTransparent border-b">
                <StaticImage
                  src="../images/location.png"
                  width={25}
                  placeholder="blurred"
                  layout="constrained"
                  className="mr-3"
                  alt=""
                />
                <p className="text-sm">Via Telesio 2, 20121 - MILANO</p>
              </div>
              <div className="flex py-3 border-solid border-greyTransparent border-b">
                <StaticImage
                  src="../images/telephone.png"
                  width={25}
                  placeholder="blurred"
                  layout="constrained"
                  className="mr-3"
                  alt=""
                />
                <p className="text-sm">02.99043745</p>
              </div>
              <div className="flex py-3 mb-5">
                <StaticImage
                  src="../images/mail.png"
                  width={25}
                  placeholder="blurred"
                  layout="constrained"
                  className="mr-3"
                  alt=""
                />
                <p className="text-sm">
                  segreteria@studiolegalecassanimarchetti.it
                </p>
              </div>
            </div>

            <div className="">
              <h3 className="mb-5 mt-10 text-sm md:mt-0">
                Studio di <p className="inline uppercase">Paderno dugnano</p>
              </h3>
              <div className="flex py-3 border-solid border-greyTransparent border-b items-center">
                <StaticImage
                  src="../images/location.png"
                  width={25}
                  placeholder="blurred"
                  layout="constrained"
                  className="mr-3"
                  alt=""
                />
                <p className="text-sm">
                  Viale Repubblica 28, 20037 - PADERNO DUGNANO
                </p>
              </div>
              <div className="flex py-3 border-solid border-greyTransparent border-b">
                <StaticImage
                  src="../images/telephone.png"
                  width={25}
                  placeholder="blurred"
                  layout="constrained"
                  className="mr-3"
                  alt=""
                />
                <p className="text-sm">02.99043745</p>
              </div>
              <div className="flex py-3">
                <StaticImage
                  src="../images/mail.png"
                  width={25}
                  placeholder="blurred"
                  layout="constrained"
                  className="mr-3"
                  alt=""
                />
                <p className="text-sm">
                  segreteria@studiolegalecassanimarchetti.it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
