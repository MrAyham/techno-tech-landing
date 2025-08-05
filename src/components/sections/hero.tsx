import { FC } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import heroIllustration from '../../assets/hero-illustration.svg';

const MotionButton = motion(Button);

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#3b030d] to-[#b49e61] text-white">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        animate={{ backgroundPosition: ['0 0', '40px 40px'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      <div className="container mx-auto grid items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="space-y-8 rounded-xl bg-black/30 p-8 backdrop-blur-md md:p-10">
          <motion.h1
            className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionize Your Business
            <br />
            with Intelligent Tech Solutions.
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-gray-200 md:text-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Techno Tech helps businesses automate, innovate, and grow using smart AI tools, dashboards, and custom web platforms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b49e61] text-black hover:bg-[#d4c584]"
            >
              Let's Build Together 🚀
            </MotionButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative"
        >
          <img
            src={heroIllustration}
            alt="AI-driven dashboard and automation illustration"
            className="mx-auto w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

