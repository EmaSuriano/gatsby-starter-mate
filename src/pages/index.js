import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import YouTube from '../sections/YouTube';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <YouTube />
    <Footer />
  </Layout>
);

export default IndexPage;
