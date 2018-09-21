import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Projects />
    <Writing />
  </Layout>
);

export default IndexPage;
