import React from 'react'
import Header from '../common/Header'
import About from './About'
import Experience from './Experience'
import Footer from './Footer'
import Homepage from './Homepage'
import Projects from './Projects'


export default function Index() {
  return (
    <div className='p-4'>
        <Header/>
        <Homepage/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
  )
}
