import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Changing the way people interact with museums.</h1>
    <p>Meoo is an app that empowers everyone visiting a museum—enhancing their experience with tools they already have:</p>
    <p>Their mobile phone.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Watch Video</Link>
  </Layout>
)

export default IndexPage
