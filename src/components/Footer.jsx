import React, { useEffect } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import techies from '/images/techies.jpg'
import { footerAnimation } from '../util/animation'
import logo from '/images/devfinda.mp4'
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
  return (
    <>
      <footer>
        <div className='footer-info'>
          <img src={techies} alt='' className='techiesImg' />
          <div className='details'>
            <h1>Take Your Tech Talents Worldwide!</h1>
            <p>
              Ready to boost your tech career globally? Join our network for top
              jobs that match your skills and pay well. We support your success
              from day one. Let’s advance your career together!
            </p>
            <Link className='hire'>Start Hiring!</Link>
          </div>
        </div>
        <main className='footer-main'>
          <article className='footer-details'>
            <div className='social-container'>
              <div className='footer-logo-container'>
                <video
                  src={logo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='footer-logo'
                />
              </div>
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
              <li>Homepage</li>
              <li>Feature</li>
              <li>Testimonials</li>
              <li>Pricing</li>
              <li>FAQs</li>
            </ul>
            <Link className='contact'>
              <h1>Contact</h1>
              <div className='mail'>
                <i
                  class='fa-regular fa-envelope'
                  style={{ color: '#ffffff' }}
                ></i>
                <p>hello@devfinda.com</p>
              </div>
            </Link>
          </article>
        </main>
        <p className='copyright'>Copyright &copy; {year}</p>
      </footer>
     
    </>
  )
}
