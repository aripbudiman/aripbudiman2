import { useState } from 'react'
import HomeSection from './components/HomeSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import MyProject from './components/MyProject'
import Certificate from './components/Certificate'
import Contacts from './components/Contacts'
import { motion, useScroll } from "framer-motion"
import './style.css'
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='app'>
        <Navbar />
        <HomeSection />
        <About />
        <Services />
        <MyProject />
        <Certificate />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}

export default App
