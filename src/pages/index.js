import * as React from "react"
import Layout from "../components/layout.js"
import Header from "../components/Header.js"
import LoStudio from "../components/LoStudio.js"
import SellingPoints from "../components/SellingPoints.js"
import Banner from "../components/Banner.js"
import WorkFields from "../components/WorkFields.js"

const IndexPage = () => (
  <>
    <Layout>
      <Header />
      <span
        id="lo-studio"
        style={{ position: "absolute", marginTop: "-120px" }}
      ></span>
      <LoStudio />
      <SellingPoints />
      <Banner />
      <span
        id="competenze"
        style={{ position: "absolute", marginTop: "-120px" }}
      ></span>
      <WorkFields />
    </Layout>
  </>
)

export default IndexPage
