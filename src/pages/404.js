import * as React from "react";
import Layout from "../components/layout.js";

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

/*export const Head = () => <Seo title="404: Not Found" />*/

export default NotFoundPage;
