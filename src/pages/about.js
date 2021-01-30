import React from 'react'
import Bio from '../components/bio'

import Layout from '../components/layout'
import SEO from "../components/seo"



const About = () => {
  return (
    <Layout page='4'>
      <SEO title="About"/>
      <h1>About</h1>
      <Bio/>
      <p>Hello</p>
    </Layout>
  )
}

export default About
