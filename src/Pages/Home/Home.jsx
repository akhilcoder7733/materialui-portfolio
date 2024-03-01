import React from 'react'
import BasicPage from '../BasicPage/BasicPage'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
// import ThreeAnimation from '../../components/ThreeAnimation/ThreeAnimation'

function Home() {
  return (
    <>
    <BasicPage/>
      <Skills/>
      <Project/>
      {/* <ThreeAnimation/> */}
    </>
  )
}

export default Home
