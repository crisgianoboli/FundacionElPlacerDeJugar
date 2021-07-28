import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Ubication from '../Ubication';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      
      <Cards />

      <Ubication />

      <Footer />
    </>
  );
}

export default Home;
