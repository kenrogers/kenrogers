import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Ken Rogers" />
    <p className="text-5xl md:text-7xl">Hi 👋🏻 I'm Ken.</p>
    <h1 className="text-4xl md:text-6xl font-black mt-8">
      I'm a full-stack web and blockchain developer.
    </h1>
    <h2 className="text-2xl md:text-4xl mt-8">
      I help high-caliber companies build the modern web with React and
      Solidity.
    </h2>
    <h3 className="text-2xl md:text-3xl mt-8 font-bold">Courses</h3>
    <ul>
      <li>
        <a
          href="https://launchyourdevcareer.com/pro"
          className="text-red-500 text-2xl"
          target="_blank"
        >
          Launch Your Dev Career
        </a>
      </li>
    </ul>

    <h3 className="text-2xl md:text-3xl mt-8 font-bold">Writing</h3>
    <ul>
      <li>
        <a
          href="https://www.freecodecamp.org/news/author/ken-rogers/"
          className="text-red-500 text-2xl"
          target="_blank"
        >
          Career Growth Guides for Aspiring Developers
        </a>
      </li>
    </ul>
    <h3 className="text-2xl md:text-3xl mt-8 font-bold">Get In Touch</h3>
    <ul>
      <li>
        <a
          href="mailto:ken@kenrogers.co"
          className="text-red-500 text-2xl"
          target="_blank"
        >
          Email
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/KenTheRogers"
          className="text-red-500 text-2xl"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/kennetharogers"
          className="text-red-500 text-2xl"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
