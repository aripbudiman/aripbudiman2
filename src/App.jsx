import { useState } from 'react'
import HomeSection from './components/HomeSection'
import Navbar from './components/Navbar'
import About from './components/About'
import './style.css'
function App() {
  return (
    <div className='app'>
      <Navbar />
      <HomeSection />
      <About />
    </div>
  )
}

export default App
