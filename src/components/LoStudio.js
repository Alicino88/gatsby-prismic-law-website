import * as React from "react";
import Container from "./UI/Container";
import Title from "./Title";
const LoStudio = () => {
  return (
    <Container>
      <Title title="Lo studio" />
      <p className="text-grey">
        Lo <span className="font-bold inline">Studio Cassani & Marchetti</span>{" "}
        è il risultato dell’evoluzione della pluriennale esperienza dei propri
        professionisti, costantemente al passo con i tempi e con le nuove
        tecnologie, in grado di adattarsi e progredire in una società sempre più
        esigente. Lavoriamo con passione e{" "}
        <span className="font-bold inline">professionalità</span>, capaci di
        prevenire o risolvere i problemi dei nostri clienti.
      </p>
    </Container>
  );
};

export default LoStudio;
