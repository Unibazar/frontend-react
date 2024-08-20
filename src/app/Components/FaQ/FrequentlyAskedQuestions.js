'use client'
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FrequentlyAskedQuestions = () => {
    const [expandedIndex, setExpandedIndex] = useState(false)

    const handleClick = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
    const Faq = [
        {
            question: "What is the purpose of this website?",
            answer: "This website is designed to help users find and purchase land for sale."
          },
          {
            question: "How can I search for available land?",
            answer: "You can use our search tool by entering the desired location, size, and price range to find available land listings."
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit cards, bank transfers, and digital wallets."
          },
          {
            question: "Is financing available for land purchases?",
            answer: "Yes, financing options are available. Please contact our support team for more details."
          },
          {
            question: "Can I visit the land before purchasing?",
            answer: "Absolutely! We encourage potential buyers to visit the land before making a purchase. Contact us to schedule a visit."
          },
          {
            question: "How do I contact customer support?",
            answer: "You can reach our customer support team via email at support@example.com or by calling (123) 456-7890."
          },

    ]
  return (
    <section className="my-20 py-5 flex flex-col justify-center px-4">
        <span className="text-center mb-16 font-medium text-[20px]">Frequently Asked Questions</span>
        <div className="grid grid-cols-2 place-items-center gap-7 max-[840px]:grid-cols-1">
        {Faq.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#F3F1F1] py-4 px-6 rounded w-[400px] max-[840px]:w-[100%] cursor-pointer"
                        onClick={() => handleClick(index)}
                    >
                        <span className="flex items-center justify-between text-[16px]">
                            {item.question} {expandedIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </span>
                        {expandedIndex === index && (
                            <ul>
                                <li className="text-[13px] mt-2 opacity-[70%]">{item.answer}</li>
                            </ul>
                        )}
                    </div>
                ))}
        </div>
    </section>
  )
}

export default FrequentlyAskedQuestions