import { FC, useEffect, useState } from 'react';

const CTA: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#111] to-[#1a1a1a] py-20">
      <div
        className={`max-w-xl mx-auto px-4 text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h3 className="mb-4 text-3xl font-semibold text-white">
          Ready to level up your business?
        </h3>
        <p className="mb-8 text-gray-300">
          Let's build something extraordinary together.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-lg font-medium text-white transition-transform hover:scale-105 hover:shadow-lg"
          >
            📞 Book a Free Consultation
          </a>
          <a
            href="#"
            className="rounded-lg border border-indigo-500 px-6 py-3 text-lg font-medium text-indigo-500 transition-colors hover:bg-indigo-500 hover:text-white"
          >
            📨 Send us a message
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
