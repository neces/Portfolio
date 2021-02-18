import React, { useState, useEffect } from 'react'
import ScrollingColorBackground from 'react-scrolling-color-background'
import Head from '../Components/Head'
import Projects from '../Components/Projects'
import About from '../Components/About'
import Footer from '../Components/Footer'

const Home = () => {
  
  return (
    <div>
        <ScrollingColorBackground
            selector='.js-color-stop[data-background-color]'
            colorDataAttribute='data-background-color'
            initialRgb='rgb(154, 140, 152)'
        />
        <section id='head'
        data-background-color='rgb(154, 140, 152)'
            className='js-color-stop'
            style={{height: '100vh'}}
        ><Head />
        </section>
        <section id='projects'
            data-background-color='rgb(214, 206, 201)'
            className='js-color-stop'
            style={{height: '100vh'}}
        ><Projects />
        </section>
        <section
            data-background-color='rgb(34, 34, 59)'
            className='js-color-stop'
            style={{height: '100vh'}}
        >
        <About />
        <Footer />
        </section>
        {console.log("Home")}
    </div>
  )
}

export default Home