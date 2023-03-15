import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";

const Privacy = () => {
  const data = useStaticQuery(graphql`
    query {
      iubendaDocument {
        privacyPolicy
      }
    }
  `);
  console.log(data);
  return (
    <Layout>
      <div
        id="privacy"
        className="py-20 mt-32 text-blue-dark mx-6 md:max-w-2xl lg:max-w-screen-xl lg:mx-auto"
        dangerouslySetInnerHTML={{ __html: data.iubendaDocument.privacyPolicy }}
      />
    </Layout>
  );
};

export default Privacy;
