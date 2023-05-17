import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export const Faqs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
  ];

  const handleBackButton = () => {
    navigate(-1); // Go back to the previous route
  };

  return (
    <div className="mx-auto mt-6 px-6 h-screen">
      <Button title='Back' btnstyles='hover:text-button' onclick={handleBackButton} />
      <div>
        <div className="text-3xl font-semibold text-center my-10">Frequently asked Questions</div>
        {faqData.map((faq, index) => (
          <div key={index} className="my-4 md:w-2/3 md:mx-10">
            <button
              className={`accordion flex justify-between items-center w-full px-4 py-3 border rounded ${
                activeAccordion === index ? '' : 'bg-none'
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform ${
                  activeAccordion === index ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeAccordion === index && (
              <div className="panel px-4 py-2 mt-2 border rounded">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
