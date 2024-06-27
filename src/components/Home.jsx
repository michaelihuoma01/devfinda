import React from 'react'
import { useEffect } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import homeImg from '/images/homeImg.jpg'
import laptopUser1 from '/images/laptop1.jpg'
import laptopUser2 from '/images/laptop2.jpg'
import jay from '/images/jay.jpg'
import alan from '/images/profile2.jpg'
import { homeAnimation } from '../util/animation'

export default function Home() {
  useEffect(() => {
    homeAnimation()
  })
  return (
    <>
      <section id='home' className='expand-container wrapper'>
        <div className='expand'>
          <h1>
            Expand Your Team, <br />
            Not Your Budget
          </h1>
          <p>
            Hire world-class tech talent overseas at a fraction of the cost of
            US hires
          </p>
          <Link className='hiring-btn s-btn' to='/start-hiring' >Start Hiring!</Link>
        </div>
        <img src={homeImg} alt='' className='homeImg' />
      </section>
      <div className='main-info'>
        <main className='home-info'>
          <article className='article-content'>
            <div className='info1'>
              <h1>Did you know?</h1>
              <p>
                Starting from $3,000/month, you can hire full-time remote
                employees with amazing qualities like:
              </p>
              <ul className='qualities'>
                <h3>
                  <span className='asterik'>*</span>Ready to work when you do,
                  fitting any time zone
                </h3>
                <h3>
                  <span className='asterik'>*</span>Proficiency in English,
                  making teamwork easy
                </h3>
                <h3>
                  <span className='asterik'>*</span>Years of experience to
                  handle any project
                </h3>
              </ul>
            </div>
            <img src={laptopUser2} alt='' className='lpt1' />
          </article>
          <article className='article-content'>
            <div className='flex-ar'>
              <img src={laptopUser1} alt='' className='lpt2' />
              <div>
                <h1>
                  ...but it's hard to <br /> find the good ones.
                </h1>
                <p>Finding great employess overseas can be tough</p>
              </div>
            </div>
            <div>
              <div className='profile-container profile1'>
                <img src={alan} alt='' className='profile' />

                <div>
                  <span className='quote'>"</span>
                  <h4>
                    I've always struggles to find people overseas, but they
                    found me a great app developer in 3 days!
                  </h4>
                  <h5>Alan, Fitness Entrepreneur</h5>
                </div>
              </div>
              <div className='profile-container'>
                <img src={jay} alt='' className='profile' />

                <div>
                  <span className='quote'>"</span>
                  <h4>
                    I really enjoyed working with the team to find a new
                    developer for my team! I've been extremely happy with the
                    entire experience.
                  </h4>
                  <h5>Jay, Agency Founder</h5>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}
