'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'
export default function Home() {

  return (
    <main className="min-h-screen bg-white dark:bg-dark-300 transition-colors duration-300">
      <SplashCursor />
      <Header />
      

      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />


    </main>
  )
}