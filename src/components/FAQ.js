import { useState } from "react";

import FAQItem from "./FAQItem";
const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript Library.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML.",
  },
  {
    id: 3,
    question: "What is useState?",
    answer: "useState is a React Hook.",
  },
];

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-5">FAQ Accordion</h1>
      {faqData.map((faq) => {
        return (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={isOpen === faq.id}
            setIsOpen={setIsOpen}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
