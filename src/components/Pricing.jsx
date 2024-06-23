import React from 'react'
import { Link } from 'react-router-dom'
import Hiring from '../UI/Hiring'

export default function Pricing() {
  return (
    <>
      <article>
        <h1>Pricing</h1>
        <div>
          $3000/month
          <ul>
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
          <Hiring />
        </div>
      </article>
      <section>
        <main>
          <img src='' alt='' />
          <div>
            <h1>Book a 15-minute intro call </h1>
            <ul>
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
          </div>
          <div>
            <Link>Schedule now</Link>
            <Link>Or send an email</Link>
          </div>
        </main>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
      </section>
      <section>
        <h1>Happy Clients</h1>
        <article>
          <div>
            <p>
              Our experience with Devfinda was exceptional—from consultation to
              onboarding. They provided perfectly matched talent, integrating
              them smoothly.
            </p>
            <img src='' alt='' />
            <h1>Fredric Alexander</h1>
            <p>Fusion Enterprises LLC</p>
          </div>
          <div>
            <p>
              Working across time zones has been surprisingly effective thanks
              to Devfinda's brilliant coordination. Their approach ensures
              everyone is synchronized and productive.
            </p>
            <img src='' alt='' />
            <h1>Marcus Greene</h1>
            <p>Startup Founder</p>
          </div>
          <div>
            <p>
              Impressed with Devfinda's approach, they truly understood our
              needs and ensured a smooth onboarding. The new developers felt
              like team members from day one.
            </p>
            <img src='' alt='' />
            <h1>James Rodriguez</h1>
            <p>Founder, TechSolutions</p>
          </div>
        </article>
      </section>
    </>
  )
}
