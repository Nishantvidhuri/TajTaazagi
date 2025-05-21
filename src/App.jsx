import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ExperienceStats from './components/ExperienceStats'
import Footer from './components/Footer'
function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ExperienceStats />
      <Footer />
    </div>
  )
}

export default App
