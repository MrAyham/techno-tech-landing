import { FC } from 'react';
import { motion } from 'framer-motion';

const AboutSection: FC = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600">
            Techno Tech Inc is a Canadian AI-first software company building tailored web platforms for businesses who want to lead in their industry.
          </p>
          <p className="mt-4 text-gray-600">
            We merge the power of automation, design, and intelligence into practical solutions for real-world growth.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://via.placeholder.com/400x300"
            alt="About us"
            className="w-full h-auto rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

