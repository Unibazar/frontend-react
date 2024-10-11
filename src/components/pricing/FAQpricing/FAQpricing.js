'use client';

import FAQAccordion from '../../widgets/common/FAQAccordion';

const FAQpricing = () => {

  const FrequentlyAskedQuestion = [
    {
      question: 'What pricing plans does Unibazar offer?',
      answer: 'Unibazar offers Free, Pro, and Enterprise plans to suit different business needs.',
    },
    {
      question: 'What features are included in the Free Plan?',
      answer: 'The Free Plan includes basic features like linking up to 2 platforms and managing up to 50 products.',
    },
    {
      question: 'How does the Pro Plan differ from the Free Plan?',
      answer: 'The Pro Plan includes advanced features like real-time analytics, inventory management, and support for up to 5 platforms.',
    },
    {
      question: 'What’s included in the Enterprise Plan?',
      answer: 'The Enterprise Plan offers unlimited platform integrations, customized features, and dedicated support.',
    },
    {
      question: 'Can I switch between plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time based on your business requirements.',
    },
    {
      question: 'Is there a trial period available?',
      answer: 'Yes, Unibazar offers a trial period for you to explore the features before committing to a paid plan.',
    },
    {
      question: 'Are there any hidden fees in the pricing plans?',
      answer: 'No, Unibazar’s pricing is transparent, with no hidden fees or charges.',
    },
  ];

  return (
    <div className=" w-full  flex-col justify-center pb-10 ">
      <h2 className="w-full font-bold text-center  text-3xl py-10">Frequently Asked Questions</h2>
      <FAQAccordion FAQ={FrequentlyAskedQuestion} />
    </div>
  );
};

export default FAQpricing;
