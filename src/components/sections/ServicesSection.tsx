import { FC } from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: 'Web Applications Development',
    description:
      'Custom websites & dashboards built with React, Next.js, and modern UI tools.',
    icon: (
      <svg
        className="h-10 w-10 text-[#6d071a]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Business Automation Systems',
    description:
      'We digitize your workflows using AI, APIs, and low-code platforms like Make & Notion.',
    icon: (
      <svg
        className="h-10 w-10 text-[#6d071a]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M9 6h6" />
        <path d="M6 9v6" />
        <path d="M9 18h8" />
      </svg>
    ),
  },
  {
    title: 'AI Integration & Consulting',
    description:
      'We embed smart AI into your business to reduce cost, increase speed, and delight your users.',
    icon: (
      <svg
        className="h-10 w-10 text-[#6d071a]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3c-1.657 0-3 1.343-3 3v.5C8.333 6.167 7.667 6 7 6c-1.657 0-3 1.343-3 3v6c0 1.657 1.343 3 3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3c1.657 0 3-1.343 3-3V9c0-1.657-1.343-3-3-3-.667 0-1.333.167-2 .5V6c0-1.657-1.343-3-3-3Z" />
      </svg>
    ),
  },
];

const ServicesSection: FC = () => (
  <section id="services" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-semibold">Our Smart Services</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700">
              {service.icon}
            </div>
            <h3 className="mb-2 text-xl font-medium">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

