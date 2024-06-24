import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Pricing.css'

export default function Pricing() {
  return (
    <>
      <article className='pricing-container'>
        <h1>Pricing</h1>
        <div className='pricing'>
          <h2>$3000/month</h2>
          <ul className='pricing-list'>
            <li>
              <img src='' alt='' />
              <p>Access to unlimited talents</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>High-Quality Talent</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>Seamless Onboarding & Hiring Process</p>
            </li>
            <li>
              <img src='' alt='' />
              <p>No Hidden Costs</p>
            </li>
          </ul>
          <Link className='hire-btn'>Start Hiring!</Link>
        </div>
      </article>
      <section>
        <main className='call-container'>
          <article className='call-section'>
            <div className='call-info'>
              <h1>Book a 15-minute intro call </h1>
              <ul className='call-list'>
                <li>
                  <span>*</span>Connect with over 1,000 on-demand vetted tech
                  talents .
                </li>
                <li>
                  <span>*</span>Fill tech roles fast and stay under budget with
                  our global network.
                </li>
                <li>
                  <span>*</span>
                  Hassle-free remote hiring
                </li>
              </ul>
              <div className='call-links'>
                <Link className='schedule'>Schedule now</Link>
                <Link className='send-mail'>Or send an email</Link>
              </div>
            </div>
            <img src='' alt='' />
          </article>
        </main>
      </section>
      <section className='clients-section'>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <h2>.</h2>
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
        <h1 className='client-text'>Happy Clients</h1>
        <article className='client-slides'>
          <div className='client-slide cslide-1'>
            <p>
              Our experience with Devfinda was exceptional—from consultation to
              onboarding. They provided perfectly matched talent, integrating
              them smoothly.
            </p>
            <div className='client-info'>
              <img src='' alt='' />
              <h1>Fredric Alexander</h1>
              <h2>Fusion Enterprises LLC</h2>
            </div>
          </div>
          <div className='client-slide cslide-2'>
            <p>
              Working across time zones has been surprisingly effective thanks
              to Devfinda's brilliant coordination. Their approach ensures
              everyone is synchronized and productive.
            </p>
            <div className='client-info'>
              <img src='' alt='' />
              <h1>Marcus Greene</h1>
              <h2>Startup Founder</h2>
            </div>
          </div>
          <div className='client-slide cslide-3'>
            <p>
              Impressed with Devfinda's approach, they truly understood our
              needs and ensured a smooth onboarding. The new developers felt
              like team members from day one.
            </p>
            <div className='client-info'>
              <img src='' alt='' />
              <h1>James Rodriguez</h1>
              <h2>Founder, TechSolutions</h2>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
