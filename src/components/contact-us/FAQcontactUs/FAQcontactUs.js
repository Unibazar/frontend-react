
'use client';

import FAQAccordion from '../../widgets/common/FAQAccordion';
import Link from 'next/link';

const FAQcontactUs = () => {

  const FrequentlyAskedQuestion = [
    {
      question: 'How can I contact Unibazar for support?',
      answer: 'You can reach us vie email at support@unibazar.in or call us at +08069641420.',
    },
    {
      question: 'What is the best way to get in touch with Unibazar?',
      answer: 'For quick assistance, use the live chat feature on our website, or email us directly.',
    },
    {
      question: 'Can I request a demo of Unibazar?',
      answer: 'Yes, you can request a demo by filling out the form on our Contact Us page.',
    },
    {
      question: 'What should I do if I encounter an issue?',
      answer: 'You can report any issues through our support email or the live chat on our website.',
    },
    {
      question: 'How quickly can I expect a response from support?',
      answer: 'We aim to respond to all inquiries within 24 hours.',
    },
  ];

  return (
    <div className=" w-full  flex-col justify-center pb-10 ">
      <h2 className="w-full font-bold text-center  text-3xl py-10">Frequently Asked Questions</h2>
      <FAQAccordion FAQ={FrequentlyAskedQuestion} />
    </div>
  );
};

export default FAQcontactUs;
