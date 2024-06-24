import React, { useEffect } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import techies from '/images/techies.jpg'
import { footerAnimation } from '../util/animation'

const date = new Date()
const year = date.getFullYear()

export default function Footer() {
  useEffect(()=>{
    footerAnimation()
  })
  return (
    <>
      <footer>
        <div className='footer-info'>
          <img src={techies} alt='' className='techiesImg'/>
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
              <h1>devfind</h1>
              <ul className='socials'>
                <div>
                  <img src='' alt='' />
                </div>
                <div>
                  <img src='' alt='' />
                </div>
                <div>
                  <img src='' alt='' />
                </div>
                <div>
                  <img src='' alt='' />
                </div>
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
            <div className='contact'>
              <h1>Contact</h1>
              <div className='mail'>
                <img src='' alt='' />
                <p>hello@devfinda.com</p>
              </div>
            </div>
          </article>
        </main>
        <p className='copyright'>Copyright &copy; {year}</p>
      </footer>
    </>
  )
}
