import { useState } from 'react'
import HomeSection from './components/HomeSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import MyProject from './components/MyProject'
import './style.css'
function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <HomeSection />
        <About />
        <Services />
        <MyProject />
      </div>
      <Footer />
    </>
  )
}

export default App
