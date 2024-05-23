import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div>
      <div className='frontpage'>
        <Navbar/>
        <Main/>
      </div>
      <About/>
      <Skills/>
      <Project/>
      <ContactMe/>
    </div>
  )
}

export default App