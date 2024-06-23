import React, { useState } from 'react';
import '../styles/Faq.css';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const faqs = [
    {
      question: 'What does Devfinda do?',
      answer: 'Devfinda is a platform that connects developers with potential clients and job opportunities.'
    },
    {
      question: 'How can I join Devfinda?',
      answer: 'You can join Devfinda by signing up on our website and creating a profile.'
    },
    {
      question: 'Is Devfinda free to use?',
      answer: 'Yes, Devfinda offers a free tier with basic features. Premium features are available for a subscription fee.'
    },
  ];

  return (
    <>
      <section>
        <h1>Frequently Asked Questions</h1>
        <div></div>
      </section>
      <div className='faq-container'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(index)}>
              <h3>{faq.question}</h3>
              <span
                className={`arrow ${
                  selectedQuestion === index ? 'up' : 'down'
                }`}
              ></span>
            </div>
            <div
              className={`faq-answer ${
                selectedQuestion === index ? 'open' : ''
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};

export default FAQ;
