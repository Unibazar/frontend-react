'use client';

import FAQAccordion from '../../widgets/common/FAQAccordion';



const FAQfeature = () => {


  const FrequentlyAskedQuestion = [
    {
      question: 'What is the purpose of this website?',
      answer: 'This website is designed to help users find and purchase land for sale.',
    },
    {
      question: 'How can I search for available land?',
      answer: 'You can use our search tool by entering the desired location, size, and price range to find available land listings.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit cards, bank transfers, and digital wallets.',
    },
    {
      question: 'Is financing available for land purchases?',
      answer: 'Yes, financing options are available. Please contact our support team for more details.',
    },
    {
      question: 'Can I visit the land before purchasing?',
      answer: 'Absolutely! We encourage potential buyers to visit the land before making a purchase. Contact us to schedule a visit.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team via email at support@example.com or by calling (123) 456-7890.',
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
