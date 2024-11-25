
'use client';

import FAQAccordion from '../../widgets/common/FAQAccordion';



const FAQaboutUs = () => {

  const FrequentlyAskedQuestion = [
    {
      question: 'What is Unibazar’s mission?',
      answer: 'Our mission is to simplify e-commerce management for sellers, enabling them to scale their businesses effortlessly.',
    },
    {
      question: 'Who are the key people behind Unibazar?',
      answer: 'Unibazar was co-founded by Amritesh, Rahul, Ekta and Parul who lead the company with a focus on innovation and growth.',
    },
    {
      question: 'What industries does Unibazar serve?',
      answer: 'Unibazar serves e-commerce sellers across various industries, from fashion to electronics.',
    },
    {
      question: 'How does Unibazar contribute to the e-commerce ecosystem?',
      answer: 'We provide tools that empower sellers to manage their businesses more efficiently, driving growth in the e-commerce sector.',
    },
    {
      question: 'What are the core values of Unibazar?',
      answer: 'Innovation, simplicity, and customer success are at the heart of everything we do.',
    },
  ];

  return (
    <div className=" w-full  flex-col justify-center pb-10 ">
      <h2 className="w-full font-bold text-center  text-3xl py-10">Frequently Asked Questions</h2>
      <FAQAccordion FAQ={FrequentlyAskedQuestion} />
    </div>
  );
};

export default FAQaboutUs;
