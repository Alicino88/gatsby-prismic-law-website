import * as React from "react";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      className="relative bg-[url('../images/sky_duomo.jpg')] bg-cover bg-center bg-no-repeat"
      ref={ref}
    >
      <div className="absolute inset-0 bg-white/60 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
      <div
        className={`text-center relative mx-auto max-w-screen-xl px-4 sm:px-20 py-32 lg:text-left border-solid border-gold border-l-8 -translate-x-full transition-all duration-1000 ease-out ${
          inView ? "translate-x-0" : ""
        } `}
      >
        <h1 className="text-grey text-3xl md:text-4xl">
          La filosofia dello studio
        </h1>

        <p className="text-blue-dark font-semibold mt-4 text-base sm:leading-relaxed lg:w-1/2">
          Ciascun cliente ha esigenze diverse. Il nostro compito è di ascoltare
          al fine di assistere con professionalità e competenza.
        </p>
      </div>
    </section>
  );
};

export default Banner;
