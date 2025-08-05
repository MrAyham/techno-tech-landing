import { FC } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CallToAction: FC = () => {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to take your business to the next level?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-300">
          Let Techno Tech be your technology partner. Whether you're a startup or an established business, we can help you scale smarter.
        </p>
        <Button
          onClick={handleClick}
          className="text-lg px-10 py-6 shadow-md transition-transform hover:scale-105"
        >
          Let's Talk
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
