import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <>
      <main className='about'>
        <div className='about-info'>
          <h1>Thats where we come in</h1>
          <p>
            Saving money is just the beginning. Explore just a few of the
            benefits of hiring top talents overseas
          </p>
        </div>
        <section className='slides-container'>
          <article className='slides slide-1'>
            <h1>From Vacancy to Onboarding in Just Two weeks</h1>
            <p>
              Speed up your hiring with our streamlined process that matches and
              onboards new tech talent in just two weeks. We handle all the
              logistics, so you can focus on growth without the wait.
            </p>
            <img src='' alt='' />
          </article>
          <article className='slides slide-2'>
            <img src='' alt='' />
            <h1>Rigorous Vetting, Quality Talent</h1>
            <p>
              Reduce hiring risks with our detailed screening, ensuring only the
              best talent joins your team.
            </p>
          </article>
          <article className='slides slide-3'>
            <h1>Double Capacity, Not Costs</h1>
            <p>
              Scale your team with top global tech talent at a fraction of the
              cost, enhancing your capabilities while managing your budget
              efficiently.
            </p>
            <img src='' alt='' />
          </article>
        </section>
        <section className='guide'>
          <h1>Your Experience with Us: A Quick Guide</h1>
          <main className='guides'>
            <div className='guide-box'>
              <img src='' alt='' />
              <p>
                Tell us about the role. We’ll discuss your needs and the ideal
                candidate
              </p>
            </div>
            <div className='guide-box'>
              <img src='' alt='' />
              <p>
                We search, screen, and shortlist three top candidates for your
                review
              </p>
            </div>
            <div className='guide-box'>
              <img src='' alt='' />
              <p>
                We present the top three picks. You interview them to find your
                best match.
              </p>
            </div>
            <div className='guide-box'>
              <img src='' alt='' />
              <p>Choose your perfect hire and get started!</p>
            </div>
          </main>
        </section>
        <article className='roles-container'>
          <div className='roles'>
            <h1>Essential Roles Sourced Globally</h1>
            <p>
              We work with businesses of all sizes, from startups to large
              corporations, across various industries.
            </p>
          </div>
          <main>
            <div>
              <h1>Frontend Developers</h1>
              <p>
                Developong the user interface, interactions and connecting with
                the backend with langugaes like React, HTML/CSS, etc
              </p>
            </div>
            <div>
              <h1>Backend Developers</h1>
              <p>
                Handles server-side logic and database management with languages
                like Python and Node.js.
              </p>
            </div>
            <div>
              <h1>Full-Stack Developers</h1>
              <p>
                Versatile developers who manage both front-end and back-end
                tasks.
              </p>
            </div>
          </main>
          <main>
            <div>
              <h1>Mobile Developers</h1>
              <p>
                Builds applications for iOS and Android using Swift, Kotlin, or
                Flutter
              </p>
            </div>
            <div>
              <h1>UI/UX Designers</h1>
              <p>
                Optimizes the user experience and design of applications and
                websites.
              </p>
            </div>
            <div>
              <h1>and many more...</h1>
              <p>
                We have all kinds of developers ready and on-demand, equipped to
                meet any of your project needs promptly
              </p>
            </div>
          </main>
        </article>
      </main>
    </>
  )
}