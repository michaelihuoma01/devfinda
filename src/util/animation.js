import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function homeAnimation() {
 

  gsap.fromTo(
    '.expand-container',
    { y: 150, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: 'expo.out' }
  )

  // gsap.fromTo(
  //   '.homeImg',
  //   { y: 150, opacity: 0 },
  //   { y: 0, opacity: 1, ease: 'power3.out', duration: 2 }
  // )


  const isMobile = window.innerWidth <= 768;

  gsap.fromTo(
    '.expand',
    { y: 150, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: 'expo.out' }
  );

  gsap.fromTo(
    '.homeImg',
    { y: 150, opacity: 0 }, 
    { y: 0, opacity: 1, ease: 'power3.out', duration: 2 }
  );

  gsap.set('.home-info article', { opacity: 0 });

  gsap.utils.toArray('.home-info article').forEach((article) => {
    gsap.fromTo(
      article,
      { y: 150, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        ease: 'expo.out',
        duration: 2,
        scrollTrigger: {
          trigger: article,
          start: isMobile ? 'top bottom' : 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

export function aboutAnimation() {


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
  // .fromTo(
  //   '.slides.slide-2',
  //   { opacity: 0 },
  //   { opacity: 1, duration: 1 },
  //   '-=1.5'
  // )
  // .fromTo(
  //   '.slides.slide-3',
  //   { opacity: 0 },
  //   { opacity: 1, duration: 1 },
  //   '-=1'
  // )

  // GUIDES
  gsap.fromTo(
    '.guide h1',

    { y: 100, opacity: 0 },

    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.guide h1',
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )

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
  gsap.fromTo(
    '.roles',
    { y: 150, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 2, ease: 'expo.out' ,
      scrollTrigger: {
        trigger: '.roles',
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )

  gsap.utils.toArray('.role-info').forEach((roleInfo, index) => {
    gsap.fromTo(
      roleInfo,
      { y: 100, opacity: 0 },
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

  gsap.fromTo(
    '.pricing-container',
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2.5,
      scrollTrigger: {
        trigger: '.pricing-container',
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )

 
  gsap.fromTo(
    '.call-section',
    { y: 150, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.call-section',
        start: 'top bottom',
      },
    }
  )

  // if (window.innerWidth <= 768) {
  //   tl.fromTo(
  //     '.callImg',
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }
  //   )
  //     .fromTo(
  //       '.call-info h1',
  //       { y: 100, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 2.5, ease: 'expo.out' }
  //     )
  //     .fromTo(
  //       '.call-list li',
  //       { y: 50, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.2 },
  //       '-=2'
  //     )
  //     .fromTo(
  //       '.call-links',
  //       { y: 50, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
  //       '-=1'
  //     )
  // } else {
  //   tl.fromTo(
  //     '.call-info h1',
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
  //   )
  //     .fromTo(
  //       '.call-list li',
  //       { y: 50, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2 }
  //     )
  //     .fromTo(
  //       '.call-links',
  //       { y: 50, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
  //       '-=0.5'
  //     )
  //     .fromTo(
  //       '.callImg',
  //       { x: 100, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 2, ease: 'power3.out' },
  //       '-=1.1'
  //     )
  // }

  // hba
  gsap.fromTo(
    '.client-text',
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      scrollTrigger: {
        trigger: '.client-text',
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )
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

  gsap.fromTo(
    '.techiesImg',
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      scrollTrigger: {
        trigger: '.footer-info',
        start: 'top bottom',
        toggleActions: 'play none none none',
        once: true,
      },
    }
  )
  gsap.fromTo(
    '.details',
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      scrollTrigger: {
        trigger: '.footer-info',
        start: 'top bottom',
        toggleActions: 'play none none none',
        once: true,
      },
    }
  )
}
