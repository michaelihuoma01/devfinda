import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function homeAnimation() {
  document.querySelectorAll('.expand-wrapper').forEach((wrapper) => {
    gsap.set(wrapper, {
      y: 150,
    })

    gsap.to(wrapper, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    })
  })

  gsap.utils.toArray('.article-content').forEach((article, index) => {
    const elements = article.children
    const isMobile = window.innerWidth <= 801

    if (isMobile) {
      gsap.fromTo(
        elements,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: article,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    } else {
      if (index === 0) {
        gsap.fromTo(
          elements,
          { y: -150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2.5,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: article,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        )
      } else {
        gsap.fromTo(
          elements,
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2.5,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: article,
              start: 'top 20%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }
  })
}

export function aboutAnimation() {
  const desktopAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-info',
        start: 'top bottom',
      },
    })

    tl.fromTo(
      '.about-info',
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'expo.out' }
    ).fromTo(
      '.slides',
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'expo.out' },
      '-=1'
    )
  }

  const mobileAnimation = () => {
    document.querySelectorAll('.wrapper').forEach((wrapper) => {
      gsap.set(wrapper, {
        y: 150,
      })

      gsap.to(wrapper, {
        y: 0,
        opacity: 1,
        ease: 'expo.out',
        duration: 2.5,
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
      })
    })

    gsap.utils.toArray('.slides').forEach((slide) => {
      gsap.fromTo(
        slide,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: slide,
            start: 'top bottom',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }

  ScrollTrigger.matchMedia({
    '(min-width: 801px)': desktopAnimation,
    '(max-width: 800px)': mobileAnimation,
  })

  // GUIDES
  gsap.fromTo(
    '.guides',
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2.5,
      scrollTrigger: {
        trigger: '.guides',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  )

  // ROLES

  gsap.utils.toArray('.role-info').forEach((roleInfo, index) => {
    gsap.fromTo(
      roleInfo,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        duration: 1,
        scrollTrigger: {
          trigger: roleInfo,
          start: 'top 80%',
          toggleActions: 'play none none none',
          delay: index * 0.3,
        },
      }
    )
  })
}

export function pricingAnimation() {
  document.querySelectorAll('.wrapper').forEach((wrapper) => {
    gsap.set(wrapper, {
      y: 150,
    })

    gsap.to(wrapper, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2.5,
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    })
  })
}

export function faqAnimation() {
  gsap.fromTo(
    '.faq-header',
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.faq-header',
        start: 'top bottom',
        toggleActions: 'play none none none',
        once: true,
      },
    }
  )

  gsap.utils.toArray('.faq-item').forEach((item) => {
    gsap.fromTo(
      item,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'top center',
          once: true,
        },
      }
    )
  })
}

export function footerAnimation() {
  document.querySelectorAll('.wrapper').forEach((wrapper) => {
    gsap.set(wrapper, {
      y: 150,
    })

    gsap.to(wrapper, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2.5,
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    })
  })
}
