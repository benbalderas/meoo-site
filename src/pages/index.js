import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave";
import staticdata from "../../staticdata.json";
import Cell from "../components/Cell";
import styled from 'styled-components';

const CellSection = styled.section `
    max-width: 800px;
    margin: 0 auto 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    padding: 0 20px;

    @media (max-width: 640px) {
      grid-template-columns: repeat(1, 1fr);
    }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <section className="Hero">
      <div className="HeroContent">
        <h1>Changing the way people interact with museums.</h1>

        <p>Meoo is an app that empowers every museum visitor, enhancing their experience with tools they already have—their mobile phones.</p>

        <Link to="/page-2/" className="Button">Watch Video</Link>

        <div className="Logos">
          <img src={require('../images/logo-jumex.png')} width="120" />
          <img src={require('../images/logo-soumaya.png')} width="120" />
          <img src={require('../images/logo-munal.png')} width="120" />
          <img src={require('../images/logo-tamayo.png')} width="120" />
        </div>

        <Wave />
      </div>
    </section>

    <section className="Cards">
      <h2>The features.</h2>

      <div className="CardGroup">
        <Card 
          title="Get Notified" 
          text="Meoo lets you know when near an intersting artwork." 
          image={require('../images/feature-01@2x.jpg')} 
        />
        <Card 
          title="Learn" 
          text="Meoo will display amazing information abou the artwork you are looking at." 
          image={require('../images/feature-01@2x.jpg')} 
        />
        <Card 
          title="Get Notified" 
          text="Meoo lets you know when near an intersting artwork." 
          image={require('../images/feature-01@2x.jpg')} 
        />
        <Card 
          title="Learn" 
          text="Meoo will display amazing information abou the artwork you are looking at." 
          image={require('../images/feature-01@2x.jpg')} 
        />
      </div>
    </section>

    <Section 
      image={require('../images/section-bg@2x.jpg')}
      logo={require('../images/icon@2x.png')}
      title="Download Meoo today."
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dui enim. Integer venenatis orci ut laoreet laoreet. Aliquam sit amet est id quam eleifend laoreet sit amet vel mi a."
    />

    <h2>For Museums.</h2>

    <CellSection>
      {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image}
        />
      ))}
    </CellSection>
  </Layout>
)

export default IndexPage
