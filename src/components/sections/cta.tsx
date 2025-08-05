import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA: FC = () => {
  const contactSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    contactSection.current = document.getElementById('contact');
  }, []);

  const handleClick = () => {
    contactSection.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#3b030d] via-[#6d071a] to-[#b49e61] p-12 text-center text-white shadow-xl"
      >
        <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
          <span className="mr-2">💡</span>Ready to unlock your business potential?
        </h3>
        <p className="mb-8 text-lg">
          Let Techno Tech help you scale faster, smarter, and with less effort.
        </p>
        <Button
          onClick={handleClick}
          className="rounded-xl bg-[#6d071a] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#540515]"
        >
          Start Your Project 🚀
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
