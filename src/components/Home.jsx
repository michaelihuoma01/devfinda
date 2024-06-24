import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <section className='expand-container'>
        <div className='expand'>
          <h1>Expand Your Team,Not Your Budget</h1>
          <p>
            Hire world-class tech talent overseas at a fraction of the cost of
            US hires
          </p>
          <Link className='hiring-btn s-btn'>Start Hiring!</Link>
        </div>
        <img src='' alt='' />
      </section>
      <main className='home-info'>
        <article>
          <div>
            <h1>Did you know?</h1>
            <p>
              Starting from $3,000/month, you can hire full-time remote employees
              with amazing qualities like:
            </p>
            <ul className='qualities'>
             <h3>
               <span>*</span>Ready to work when you do, fitting any time zone
             </h3>
             <h3>
               <span>*</span>Proficiency in English, making teamwork easy
             </h3>
            </ul>
          </div>
          <img src='' alt='' />
        </article>
        <article>
          <img src='' alt='' />
          <div>
            <h1>...but it's hard to find the good ones.</h1>
            <p>Finding great employess overseas can be tough</p>
            <div>
              <img src='' alt='' />
              <div>
                <span>"</span>
                <h4>
                  I've always struggles to find people overseas, but they found
                  me a great app developer in 3 days!
                </h4>
                <h5>Alan, Fitness Entrepreneur</h5>
              </div>
            </div>
            <div>
              <img src='' alt='' />
              <div>
                <span>"</span>
                <h4>
                  I really enjoyed working with the team to find a new developer
                  for my team! I've been extremely happy with the entire
                  experience.
                </h4>
                <h5>Jay, Agency Founder</h5>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
