import { FC } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const About: FC = () => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
          Who We Are
        </h2>
        <Bot className="mx-auto mb-6 h-16 w-16 text-[#6d071a]" aria-hidden="true" />
        <p className="text-gray-600 dark:text-gray-300">
          Techno Tech شركة تقنية تستخدم الذكاء الاصطناعي لتطوير الأعمال وخلق حلول ذكية.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;

