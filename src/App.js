import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Project from './Pages/Project/Project'
import Skills from './Pages/Skills/Skills'
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from './components/Footer/Footer'

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/materialui-portfolio' element={<Home/>}/>
        <Route  path='/projects' element={<Project/>}/>
        <Route  path='/skills' element={<Skills/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
