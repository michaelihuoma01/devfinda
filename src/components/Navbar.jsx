import React, { useState } from 'react'
import '../styles/Navbar.css'
import Hiring from '../UI/Hiring'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbar'>
      <h1 className='brand'>devfinda</h1>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar3' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#pricing'>Pricing</a>
        <a href='#testimonials'>Testimonials</a>
        <a href='#faqs'>FAQs</a>
        <Hiring />
      </div>
    </nav>
  )
}
