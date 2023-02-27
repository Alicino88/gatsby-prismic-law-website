import * as React from "react";
import Container from "./UI/Container";
import Title from "./Title";
const LoStudio = () => {
  return (
    <Container>
      <Title title="Lo studio" />
      <p className="text-grey">
        Lo <p className="font-bold inline">Studio Cassani & Marchetti</p> è il
        risultato dell’evoluzione della pluriennale esperienza dei propri
        professionisti, sempre al passo con i tempi e con le nuove tecnologie,
        in grado di adattarsi e progredire in una società sempre più esigente.
        Lavoriamo con passione e{" "}
        <p className="font-bold inline">professionalità</p>, capaci di prevenire
        o risolvere i problemi dei nostri clienti.
      </p>
    </Container>
  );
};

export default LoStudio;
