import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Pricing.css'
import callImg from '/images/call.jpg'
import greenhouse from '/images/greenhouse.png'
import nyt from '/images/nyt.png'
import tc from '/images/tc.png'
import yahoo from '/images/yahoo.png'
import wired from '/images/wired.png'
import bI from '/images/bI.png'
import { pricingAnimation } from '../util/animation'

export default function Pricing() {
  useEffect(() => {
    pricingAnimation()
  })

  return (
    <>
      <article id='pricing' className='pricing-container'>
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
                  <span className='asterik'>*</span>Connect with over 1,000
                  on-demand vetted tech talents .
                </li>
                <li>
                  <span className='asterik'>*</span>Fill tech roles fast and
                  stay under budget with our global network.
                </li>
                <li>
                  <span className='asterik'>*</span>
                  Hassle-free remote hiring
                </li>
              </ul>
              <div className='call-links'>
                <Link className='schedule'>Schedule now</Link>
                <Link className='send-mail'>Or send an email</Link>
              </div>
            </div>
            <img src={callImg} alt='' className='callImg' />
          </article>
        </main>
      </section>
      <section className='clients-section'>
        <div className='orgs'>
          <div className='org-slide'>
            <img src={bI} alt='' className='bI' />
            <img src={tc} alt='' className='tc' />
            <img src={yahoo} alt='' className='yahoo' />
            <img src={greenhouse} alt='' className='greenhouse' />
            <img src={nyt} alt='' className='nyt' />
          </div>
          <div className='org-slide'>
            <img src={bI} alt='' className='bI' />
            <img src={tc} alt='' className='tc' />
            <img src={yahoo} alt='' className='yahoo' />
            <img src={greenhouse} alt='' className='greenhouse' />
            <img src={nyt} alt='' className='nyt' />
          </div>
        </div>
        <h1 className='client-text'>Happy Clients</h1>
        <article className='rem-slides'>
          <div className='clients-slides'>
            <div className='client-slide cslide-1'>
              <p>
                Our experience with Devfinda was exceptional—from consultation
                to onboarding. They provided perfectly matched talent,
                integrating them smoothly.
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
            <div className='client-slide cslide-1'>
              <p>
                Our experience with Devfinda was exceptional—from consultation
                to onboarding. They provided perfectly matched talent,
                integrating them smoothly.
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
          </div>
        </article>
      </section>
    </>
  )
}
