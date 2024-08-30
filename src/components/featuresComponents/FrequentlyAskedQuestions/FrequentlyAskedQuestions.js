'use client';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Accordion from '@mui/material/Accordion';
import {styled} from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const CustomAccordion = styled(Accordion)(()=>{
  return {
    boxShadow:'none',
    border:'none',
    backgroundColor:'rgba(244, 237, 241, 1)',
  }  
})


const FrequentlyAskedQuestions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const Faq = [
    {
      question:'What is the purpose of this website?',
      answer: 'This website is designed to help users find and purchase land for sale.',
    },
    {
      question:'How can I search for available land?',
      answer: 'You can use our search tool by entering the desired location, size, and price range to find available land listings.',
    },
    {
      question:'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit cards, bank transfers, and digital wallets.',
    },
    {
      question: 'Is financing available for land purchases?',
      answer: 'Yes, financing options are available. Please contact our support team for more details.',
    },
    {
      question:'Can I visit the land before purchasing?',
      answer: 'Absolutely! We encourage potential buyers to visit the land before making a purchase. Contact us to schedule a visit.',
    },
    {
      question:'How do I contact customer support?',
      answer: 'You can reach our customer support team via email at support@example.com or by calling (123) 456-7890.',
    },
  ];

  return (
    <div className=" w-full  flex-col justify-center pb-10 ">
      <h2 className="w-full font-bold text-center  text-3xl py-10">Frequently Asked Questions</h2>
      <div className="w-full flex md:flex-row flex-col md:gap-12  gap-4 justify-center">
        <div className="w-full md:w-2/5 flex-col flex gap-4 ">
          {Faq.slice(0, 3).map((faq, index) => (
            <div key={index} className="w-full  flex " onClick={() => handleClick(index)}>
              <CustomAccordion className="w-full  flex-col">
                <AccordionSummary 
                  expandIcon={expandedIndex === index ? <AiOutlineMinus className="w-auto" /> : <AiOutlinePlus className="w-auto" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <p className="w-full font-normal text-left ">{faq.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                {expandedIndex === index && <p className="w-full font-light text-left text-gray-500">{faq.answer}</p>}
                </AccordionDetails>
              </CustomAccordion>   
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/5 flex-col flex gap-4">
          {Faq.slice(3,6).map((faq, index) => (
            <div key={index} className="w-full  flex	" onClick={() => handleClick(index + 3)}>
              <CustomAccordion className="w-full  flex-col">
                <AccordionSummary 
                  expandIcon={expandedIndex === index + 3 ? <AiOutlineMinus className="w-auto" /> : <AiOutlinePlus className="w-auto" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <p className="w-full font-normal text-left ">{faq.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                {expandedIndex === index + 3 && <p className="w-full font-light text-left text-gray-500">{faq.answer}</p>}
                </AccordionDetails>
              </CustomAccordion>  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;