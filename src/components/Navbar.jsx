import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '/images/devfinda.mp4'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  let lastScroll = 0

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        setIsScrollingUp(true)
        return
      }

      if (currentScroll > lastScroll) {
        setIsScrollingUp(false)
      } else if (currentScroll < lastScroll) {
        setIsScrollingUp(true)
      }
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${isScrollingUp ? 'show' : 'hide'}`}>
      <div className='video-logo-container'>
        <video
          src={logo}
          autoPlay
          loop
          muted
          playsInline
          className='video-logo'
        />
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar3' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <a href='#home' onClick={closeMenu}>
          Home
        </a>
        <a href='#about' onClick={closeMenu}>
          About
        </a>
        <a href='#pricing' onClick={closeMenu}>
          Pricing
        </a>
        <a href='#testimonials' onClick={closeMenu}>
          Testimonials
        </a>
        <a href='#faqs' onClick={closeMenu}>
          FAQs
        </a>
        <Link className='hiring-btn' onClick={closeMenu}>
          Start Hiring
        </Link>
      </div>
    </nav>
  )
}
