import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/images/devfinda.mp4'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset 
      // console.log(currentScroll);
      if (currentScroll <= 200) {
        setIsScrollingUp(true)
      } else if (currentScroll > lastScroll) {
        setIsScrollingUp(false)
      } else {
        setIsScrollingUp(true)
      }
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScroll])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    const navbarHeight = document.querySelector('.nav-bar').offsetHeight

    if (element) {
      const offsetTop = element.offsetTop - navbarHeight
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
    closeMenu()
    setIsScrollingUp(true)
  }

  return (
    <>
    <nav className={`nav-bar ${isScrollingUp ? 'show' : 'hide'}`}>
      <div className='navbar-container'>
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
          <NavLink to='#home' onClick={() => scrollToSection('home')}>
            Home
          </NavLink>
          <NavLink to='#about' onClick={() => scrollToSection('about')}>
            About
          </NavLink>
          <NavLink to='#pricing' onClick={() => scrollToSection('pricing')}>
            Pricing
          </NavLink>
          <NavLink
            to='#testimonials'
            onClick={() => scrollToSection('testimonials')}
          >
            Testimonials
          </NavLink>
          <NavLink to='#faqs' onClick={() => scrollToSection('faqs')}>
            FAQs
          </NavLink>
        </div>
        <div className='navbar-right'>
          <NavLink
            to='/start-hiring'
            className='hiring-btn'
            onClick={() => scrollToSection('pricing')}
          >
            Start Hiring
          </NavLink>
        </div>
      </div>
    </nav>
    <div className='mb'></div>
    </>
  )
}

// import React, { useState, useEffect } from 'react'
// import '../styles/Navbar.css'
// import { NavLink } from 'react-router-dom'
// import logo from '/images/devfinda.mp4'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrollingUp, setIsScrollingUp] = useState(true)
//   let lastScroll = 0

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const closeMenu = () => {
//     setIsOpen(false)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.pageYOffset
//       setIsScrollingUp(currentScroll <= lastScroll)
//       lastScroll = currentScroll
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id)
//     const navbarHeight = document.querySelector('.navbar').offsetHeight

//     if (element) {
//       const offsetTop = element.offsetTop - navbarHeight
//       window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth',
//       })
//     }
//     closeMenu()
//     setIsScrollingUp(true)
//   }

//   return (
//     // <nav className='nav-bar'>
//     //   <nav className={`navbar ${isScrollingUp ? 'show' : 'hide'}`}>
//     //     <div className='video-logo-container'>
//     //       <video
//     //         src={logo}
//     //         autoPlay
//     //         loop
//     //         muted
//     //         playsInline
//     //         className='video-logo'
//     //       />
//     //     </div>
//     //     <div className='menu-icon' onClick={toggleMenu}>
//     //       <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
//     //       <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
//     //       <div className={`bar ${isOpen ? 'bar3' : ''}`}></div>
//     //     </div>
//     //     <div className={`menu ${isOpen ? 'open' : ''}`}>
//     //       <NavLink to='#home' onClick={() => scrollToSection('home')}>
//     //         Home
//     //       </NavLink>
//     //       <NavLink to='#about' onClick={() => scrollToSection('about')}>
//     //         About
//     //       </NavLink>
//     //       <NavLink to='#pricing' onClick={() => scrollToSection('pricing')}>
//     //         Pricing
//     //       </NavLink>
//     //       <NavLink
//     //         to='#testimonials'
//     //         onClick={() => scrollToSection('testimonials')}
//     //       >
//     //         Testimonials
//     //       </NavLink>
//     //       <NavLink to='#faqs' onClick={() => scrollToSection('faqs')}>
//     //         FAQs
//     //       </NavLink>
//     //     </div>
//     //     <div className='navbar-right'>
//     //       <NavLink
//     //         to='/start-hiring'
//     //         className='hiring-btn'
//     //         onClick={() => scrollToSection('pricing')}
//     //       >
//     //         Start Hiring
//     //       </NavLink>
//     //     </div>
//     //   </nav>
//     // </nav>
//     <nav className='nav-bar'>
//       <div className='navbar-container'>
//         <div className='video-logo-container'>
//           <video
//             src={logo}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className='video-logo'
//           />
//         </div>
//         <div className='menu-icon' onClick={toggleMenu}>
//           <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
//           <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
//           <div className={`bar ${isOpen ? 'bar3' : ''}`}></div>
//         </div>
//         <div className={`menu ${isOpen ? 'open' : ''}`}>
//           <NavLink to='#home' onClick={() => scrollToSection('home')}>
//             Home
//           </NavLink>
//           <NavLink to='#about' onClick={() => scrollToSection('about')}>
//             About
//           </NavLink>
//           <NavLink to='#pricing' onClick={() => scrollToSection('pricing')}>
//             Pricing
//           </NavLink>
//           <NavLink
//             to='#testimonials'
//             onClick={() => scrollToSection('testimonials')}
//           >
//             Testimonials
//           </NavLink>
//           <NavLink to='#faqs' onClick={() => scrollToSection('faqs')}>
//             FAQs
//           </NavLink>
//         </div>
//         <div className='navbar-right'>
//           <NavLink
//             to='/start-hiring'
//             className='hiring-btn'
//             onClick={() => scrollToSection('pricing')}
//           >
//             Start Hiring
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   )
// }
