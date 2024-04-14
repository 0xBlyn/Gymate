import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Featured from '../components/Featured'
import ChooseUs from '../components/ChooseUs'
import Trainers from '../components/Trainers'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import BmiCalc from '../components/BmiCalc'
import Pricing from '../components/Pricing'
import ContactTrainer from '../components/ContactTrainer'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <Blog />
      <ContactTrainer />
      <Footer />
    </div>
  )
}

export default Home