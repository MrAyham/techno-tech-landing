import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What services does Techno Tech offer?',
    answer:
      'We provide AI-powered web solutions, automation tools, and business platforms.',
  },
  {
    question: 'Do you offer custom software?',
    answer: 'Yes, we specialize in tailor-made systems for SMBs.',
  },
  {
    question: 'How long does it take to launch a project?',
    answer: 'It depends on the scope, but typically between 2 to 6 weeks.',
  },
  {
    question: 'Is there support after delivery?',
    answer: 'Absolutely! We provide long-term support and upgrades.',
  },
];

const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-gray-900 dark:text-white"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4 pb-4 text-gray-700 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

