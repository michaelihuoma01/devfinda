import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Navbar />
      <Home />
      <About />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  )
}
