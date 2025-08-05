import { FC, useEffect, useState } from 'react';
import Button from '../ui/Button';

const Hero: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-20">
        <div className={`flex-1 text-center md:text-left transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI-Powered Solutions for Modern Businesses</h1>
          <p className="mb-8 text-lg max-w-xl mx-auto md:mx-0">
            We help small and medium businesses scale faster using automation, AI, and digital platforms tailored to their needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Button className="shadow-lg hover:shadow-xl">Request a Demo</Button>
            <Button variant="secondary" className="shadow-lg hover:shadow-xl">Learn More</Button>
          </div>
        </div>
        <div className={`flex-1 flex justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform">
            <span className="text-white/70">AI Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
