import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <section
      className="flex items-center justify-center bg-blue-light mt-32"
      style={{ height: "60vh" }}
    >
      <div className="text-blue-dark">
        <h1 className="text-3xl">Oops!</h1>
        <p>La pagina che cerchi non esiste.</p>
      </div>
    </section>
  </Layout>
);

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

export default NotFoundPage;
