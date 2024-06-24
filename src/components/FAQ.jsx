import React, { useState } from 'react'
import '../styles/Faq.css'

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(index)
    }
  }

  const faqs = [
    {
      question: 'What does Devfinda do?',
      answer:
        'Devfinda specializes in connecting talented professionals with startups, large corporations, individuals, creative industries, individuals, We help tech talents find exciting job opportunities and assist our clients in sourcing top talents.',
    },
    {
      question: 'How does Devfinda help me?',
      answer:
        'We have established relationships with a wide network of tech talents and industry professionals. We can provide you with access to exceptional developers and designers, handle the entire hiring process till onboarding. Our goal is to support you throughout your search journey.',
    },
    {
      question:
        'How quickly can i expect to hire a candidate through your service?',
      answer:
        ' Our streamlined process ensures you can expect to start interviewing our top three candidates within just a 10 - 15 days. Once you select your ideal candidate, they can begin working with you right away. Our quick turnaround times mean your projects don’t have to wait.',
    },
    {
      question:
        'What makes your candidates stand out from those I might find on other platforms?',
      answer:
        'Our candidates are rigorously vetted, not just for their technical skills but also for their ability to seamlessly integrate into Western work cultures. We emphasize a blend of expertise, communication skills, and cultural adaptability, ensuring they\'re not just skilled but also a perfect fit for your team.',
    },
    {
      question: 'What if the candidate I hire doesn\'t meet my expectations?',
      answer:
        'We stand behind the quality of our candidates with a 3-month Perfect Hire Guarantee. If your new hire doesn’t meet your expectations, we will get you an instant replacement at no additional charge. This guarantee allows you to hire with confidence, knowing that your satisfaction is important to us.',
    },
  ]

  return (
    <section className='faq-section'>
      <h1>Frequently Asked Questions</h1>
      <div className='faq-container'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div
              className={`faq-question ${
                selectedQuestion === index ? 'clicked' : ''
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <h3>{faq.question}</h3>
              <div className='arrow-container'>
                <span
                  className={`arrow ${
                    selectedQuestion === index ? 'up' : 'down'
                  }`}
                ></span>
              </div>
            </div>
            <div
              className={`faq-answer ${
                selectedQuestion === index ? 'open' : ''
              }`}
            >
              <p>{faq.answer}</p>
            </div>
            <div className='faq-line'></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
