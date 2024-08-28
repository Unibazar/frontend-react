'use client';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FrequentlyAskedQuestions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const Faq = [
    {
      answer: 'This website is designed to help users find and purchase land for sale.',
    },
    {
      answer: 'You can use our search tool by entering the desired location, size, and price range to find available land listings.',
    },
    {
      answer: 'We accept various payment methods including credit cards, bank transfers, and digital wallets.',
    },
    {
      answer: 'Yes, financing options are available. Please contact our support team for more details.',
    },
    {
      answer: 'Absolutely! We encourage potential buyers to visit the land before making a purchase. Contact us to schedule a visit.',
    },
    {
      answer: 'You can reach our customer support team via email at support@example.com or by calling (123) 456-7890.',
    },
  ];

  return (
    <div className="w-full  flex-col justify-center pb-10 ">
      <h2 className="w-full font-normal text-center text-2xl py-10">Frequently Asked Questions</h2>
      <div className="w-full flex md:flex-row flex-col md:gap-20 gap-4 justify-center">
        <div className="w-full md:w-1/2 flex-col flex gap-4 ">
          {Faq.slice(0, 3).map((faq, index) => (
            <div key={index} className="w-full flex flex-row bg-gray-200 justify-between md:gap-20 gap-4 py-2 px-2 rounded cursor-pointer	" onClick={() => handleClick(index)}>
              <div className="w-full flex-col">
                <p className="w-full font-normal text-left ">{index === 0 ? 'What is the purpose of this website?' : index === 1 ? 'How can I search for available land?' : 'What payment methods do you accept?'}</p>
                {expandedIndex === index && <p className="w-full font-light text-left text-gray-500">{faq.answer}</p>}
              </div>
              {expandedIndex === index ? <AiOutlineMinus className="w-auto" /> : <AiOutlinePlus className="w-auto" />}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex-col flex gap-4">
          {Faq.slice(3, 6).map((faq, index) => (
            <div key={index} className="w-full flex flex-row bg-gray-200 justify-between md:gap-20 gap-4 py-2 px-2 rounded cursor-pointer	" onClick={() => handleClick(index + 3)}>
              <div className="w-full flex-col">
                <p className="w-full font-normal text-left ">{index === 0 ? 'Is financing available for land purchases?' : index === 1 ? 'Can I visit the land before purchasing?' : 'How do I contact customer support?'}</p>
                {expandedIndex === index + 3 && <p className="w-full font-light text-left text-gray-500">{faq.answer}</p>}
              </div>
              {expandedIndex === index + 3 ? <AiOutlineMinus className="w-auto" /> : <AiOutlinePlus className="w-auto" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
