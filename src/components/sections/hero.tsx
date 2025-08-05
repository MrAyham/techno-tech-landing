import { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: FC = () => {
  const { scrollY } = useScroll();
  const yBg1 = useTransform(scrollY, [0, 300], [0, 60]);
  const yBg2 = useTransform(scrollY, [0, 300], [0, -60]);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#3b030d] to-[#b49e61] text-white">
      {/* Decorative Layers */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#6d071a]/40 blur-3xl"/>
      <motion.div
        style={{ y: yBg2 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#b49e61]/30 blur-3xl"/>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-6"
          style={{ textShadow: '0 0 25px rgba(255,255,255,0.6)' }}
        >
          We Build Smart Systems for Bold Businesses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 text-lg text-gray-200"
        >
          Techno Tech delivers tailor-made automation & AI-powered platforms to fuel your business growth.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-block px-8 py-4 rounded-md font-semibold bg-[#6d071a] hover:bg-[#540515] shadow-lg hover:shadow-xl transition-colors"
        >
          Start Your Transformation
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

