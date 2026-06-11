const FAQItem = ({ faq, isOpen, setIsOpen }) => {
  return (
    <div className="border rounded-lg mb-6 border-b border-gray-500 w-6/12">
      <h1
        onClick={() => setIsOpen(isOpen ? null : faq.id)}
        className="cursor-pointer p-3"
      >
        {faq.question}
      </h1>

      {isOpen && <p className="mb-5 bg-gray-800 mx-4 m-auto rounded-md p-2 px-4">{faq.answer}</p>}
    </div>
  );
};

export default FAQItem;
