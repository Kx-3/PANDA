import { useState } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Kenya from './components/Kenya.jsx'
import Platform from './components/Platform.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <Kenya/>
      <Platform/>
      <Footer/>
      <ScrollRestoration/>
    </>
  )
}

export default App
