import { FC } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CallToAction: FC = () => {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Ready to take your business to the next level?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Let Techno Tech be your technology partner. Whether you're a startup or an established business, we can help you scale smarter.
        </p>
        <Button
          onClick={handleClick}
          className="px-10 py-6 text-lg shadow-md transition-transform hover:scale-105"
        >
          Let's Talk
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
