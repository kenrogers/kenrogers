import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2 className="text-5xl md:text-7xl">Hi, my name is Ken.</h2>
    <h1 className="text-3xl md:text-5xl font-black mt-8">
      I use <span className="text-purple-500">words</span> and{" "}
      <span className="text-red-500">code</span> to help businesses decrease
      costly technical overhead and increase high-quality customers.
    </h1>
    <h3 className="text-2xl md:text-3xl mt-8">I can help in two ways:</h3>
    <p className="text-xl md:text-2xl mt-8">
      Write custom <span className="text-purple-500">email marketing</span>{" "}
      campaigns for small businesses looking to convert more website visitors to
      customers.
    </p>
    <p className="text-xl md:text-2xl mt-8">
      Create <span className="text-red-500">custom software</span> for
      businesses looking to streamline complex processes.
    </p>
    <p className="text-xl md:text-2xl mt-8">Reach out at ken@kenrogers.co</p>
  </Layout>
)

export default IndexPage
