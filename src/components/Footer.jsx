import React, { useEffect } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import techies from '/images/techies.jpg'
import { footerAnimation } from '../util/animation'
import logo from '/images/devfinda.gif'
import facebook from '/images/fb.svg'
import instagram from '/images/ig.svg'
import youtube from '/images/yt.svg'
import twitter from '/images/twitter.svg'

const date = new Date()
const year = date.getFullYear()

export default function Footer() {
  useEffect(() => {
    footerAnimation()
  })

  const scrollTosection = (id) => {
    const element = document.getElementById(id)
    const navbarHeight = document.querySelector('.navbar').offsetHeight
    const offsetTop = element.offsetTop - navbarHeight
    if (element) {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <>
      <footer>
        <div className='footer-info'>
          <img src={techies} alt='' className='techiesImg wrapper' />
          <div className='details wrapper'>
            <h1>Take Your Tech Talents Worldwide!</h1>
            <p>
              Ready to boost your tech career globally? Join our network for top
              jobs that match your skills and pay well. We support your success
              from day one. Let’s advance your career together!
            </p>
            <Link className='hire' to='/start-hiring'>
              Start Hiring!
            </Link>
          </div>
        </div>
        <main className='footer-main'>
          <article className='footer-details'>
            <div className='social-container'>
              <div className='logo-wrapper'>
                <img src={logo} alt='Logo' className='logo' />
              </div>
              {/* <div className='footer-logo-container'>
                <video
                  src={logo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='footer-logo'
                />
              </div> */}
              <ul className='socials'>
                <Link className='social-link'>
                  <img src={facebook} alt='' />
                </Link>
                <Link className='social-link'>
                  <img src={twitter} alt='' />
                </Link>

                <Link className='social-link'>
                  <img src={instagram} alt='' />
                </Link>
                <Link className='social-link'>
                  <img src={youtube} alt='' />
                </Link>
              </ul>
            </div>
            <ul className='company'>
              <h1>Company</h1>
              <Link
                to='#home'
                onClick={() => scrollTosection('home')}
                className='page-links'
              >
                Homepage
              </Link>
              <Link
                className='page-links'
                to='#about'
                onClick={() => scrollTosection('about')}
              >
                Feature
              </Link>
              <Link
                to='#testimonials'
                onClick={() => scrollTosection('testimonials')}
                className='page-links'
              >
                Testimonials
              </Link>
              <Link
                to='pricing'
                onClick={() => scrollTosection('pricing')}
                className='page-links'
              >
                Pricing
              </Link>
              <Link
                to='faqs'
                onClick={() => scrollTosection('faqs')}
                className='page-links'
              >
                FAQs
              </Link>
            </ul>
            <Link className='contact'>
              <h1>Contact</h1>
              <Link className='mail'>
                <i
                  class='fa-regular fa-envelope'
                  style={{ color: '#ffffff' }}
                ></i>
                <p>hello@devfinda.com</p>
              </Link>
            </Link>
          </article>
        </main>
        <p className='copyright'>Copyright &copy; {year}</p>
      </footer>
    </>
  )
}
