import * as React from "react";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      className="relative bg-[url('../images/cassani-e-marchetti-filosofia.jpg')] bg-cover bg-center bg-no-repeat"
      ref={ref}
    >
      <div className="absolute inset-0 bg-white/60 bg-transparent bg-gradient-to-r from-white/95 sm:to-white/25"></div>
      <div
        className={`relative mx-auto max-w-screen-xl px-4 sm:px-20 py-24 text-left border-solid border-gold border-l-8 -translate-x-full transition-all duration-1000 ease-out ${
          inView ? "translate-x-0" : ""
        } `}
      >
        <h1 className="text-grey text-3xl md:text-4xl">
          La filosofia dello studio
        </h1>

        <h3 className="text-blue-dark  mt-4 text-base sm:leading-relaxed lg:w-1/2 font-light">
          <p className="font-bold block uppercase mb-2">
            Interesse primario del cliente
          </p>{" "}
          È questo il principio su cui si fondano, da sempre, le scelte e le
          strategie dentro e fuori i Tribunali.
          <p className="block mt-3 mb-3">
            Nello svolgimento del nostro incarico, non si distoglie mai lo
            sguardo da quello che si considera il risultato ottimale per il
            cliente, che sia un privato o una società, in termini di tempi,
            costi e vantaggi.
          </p>
          Il cliente, da noi, è parte integrante e consapevole delle scelte che
          vengono adottate per la risoluzione del mandato, grazie ad una
          costante informazione ed all’oggettività dei professionisti dello
          studio.
        </h3>
      </div>
    </section>
  );
};

export default Banner;
