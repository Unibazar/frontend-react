'use client';

import FAQAccordion from '../../widgets/common/FAQAccordion';



const FAQfeature = () => {

  const FrequentlyAskedQuestion = [
    {
      question: 'What e-commerce platforms does Unibazar support?',
      answer: 'Unibazar currently supports Myntra, Meesho, and custom websites, with more platforms being added regularly.',
    },
    {
      question: 'Can I manage my inventory across all platforms using Unibazar?',
      answer: 'Yes, Unibazar allows you to sync and manage your inventory in real-time across all connected platforms.',
    },
    {
      question: 'How does Unibazar handle product listings?',
      answer: 'You can list products across multiple platforms simultaneously from a single interface, saving time and effort.',
    },
    {
      question: 'What analytics features does Unibazar offer?',
      answer: 'Unibazar provides real-time sales analytics, inventory tracking, and performance reports to help you make informed decisions.',
    },
    {
      question: 'How does Unibazar integrate with my existing systems?',
      answer: 'Unibazar offers seamless integration with various e-commerce platforms and tools, ensuring smooth operations.',
    },
  ];

  return (
    <div className=" w-full  flex-col justify-center pb-10 ">
      <h2 className="w-full font-bold text-center  text-3xl py-10">Frequently Asked Questions</h2>
      <FAQAccordion FAQ={FrequentlyAskedQuestion} />
    </div>
  );
};

export default FAQfeature;
