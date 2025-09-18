import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EducationFocus from './components/EducationFocus'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DarkBg from './assets/visax-r9DV-EdDmWM-unsplash.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen">
      <img
        src={DarkBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <EducationFocus />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
