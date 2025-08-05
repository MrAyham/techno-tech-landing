import { FC } from 'react';
import { motion } from 'framer-motion';

const CTASection: FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to future-proof your business?
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Let’s build smart systems together. Contact us today and start your transformation.
        </p>
        <a
          href="mailto:technoartsy@gmail.com"
          className="inline-block rounded-md bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;
