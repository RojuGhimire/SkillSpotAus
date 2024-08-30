import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What does RPL mean?',
    answer: 'RPL stands for Recognition of Prior Learning. It is an assessment process that recognizes the skills and knowledge you have acquired through formal and informal learning, work experience, and other activities.',
  },
  {
    question: 'How do I get an RPL Certificate in Australia?',
    answer: 'To get an RPL Certificate, you need to apply through a registered training organization (RTO) in Australia. They will assess your skills and knowledge based on evidence you provide.',
  },
  {
    question: 'Are RPL Qualifications Nationally Recognized in Australia?',
    answer: 'Yes, RPL qualifications are nationally recognized in Australia, provided they are issued by a registered training organization (RTO).',
  },
  {
    question: 'Am I Eligible for RPL?',
    answer: 'You are eligible for RPL if you can provide sufficient evidence of your skills and knowledge that match the learning outcomes of a particular qualification.',
  },
  {
    question: 'Who can do RPL in Australia?',
    answer: 'Anyone with relevant work experience or prior learning that matches the requirements of a qualification can apply for RPL in Australia.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto font-overpass lg:mt-8  p-6">
      <h2 className="text-2xl md:text-3xl text-center font-semibold mb-2">Frequently Asked Questions</h2>
      <h3 className=" font-poppins text-center text-[#B5B5B5] mb-10">Our pricing is <span className='font-semibold'>tailored</span> to your <span className='font-semibold'>business</span> size and specific needs:</h3>
      <div className="flex flex-col lg:flex-row  gap-16  ">
        {/* Image Section */}
        <div className="hidden lg:flex flex-col space-y-2">
          <img
            src="/faq.png"
            alt="FAQ illustration"
            className="w-full h-[247px] rounded-lg shadow-lg"
          />
          <img
            src="/faq1.png"
            alt="FAQ illustration"
            className="w-full h-[267px] rounded-lg shadow-lg"
          />
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col space-y-10 lg:w-2/3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg   border border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center  w-full text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-primary">
                  {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} className=' bg-primary rounded-full text-white '/>}
                </span>
              </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
