import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OurStories from '../components/OurStories';
import Carousel from '../components/Carousel';
import Amenities from '../components/Amenities';
import Solutions from '../components/Solutions';
import Events from '../components/Events';
import NewsLetterForm from '../components/NewsLetterForm';
import Footer from '../components/Footer';

const Home = () => {
    return  (
        <>
          <Navbar />
          <Hero />
          <OurStories />
          <Carousel />
          <Amenities />
          <Solutions />
          <Events />
          <NewsLetterForm />
          <Footer />
        </>
    )
}

export default Home;