import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: 'Smart Web Platforms',
    description:
      'We design and build tailored web apps that automate business tasks and boost efficiency.',
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
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
      </svg>
    ),
  },
  {
    title: 'Business Automation',
    description:
      'From invoices to inventory, we build AI-powered tools that save time and reduce errors.',
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
        <rect x="8" y="3" width="8" height="4" rx="1" />
        <rect x="8" y="17" width="8" height="4" rx="1" />
        <path d="M12 7v10" />
        <path d="M5 11h14" />
      </svg>
    ),
  },
  {
    title: 'AI Integration & Consulting',
    description:
      'Unlock the power of artificial intelligence in your business with our custom solutions.',
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
        <path d="M12 3a5 5 0 0 0-5 5v1a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3v1a5 5 0 0 0 10 0v-1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3V8a5 5 0 0 0-5-5Z" />
      </svg>
    ),
  },
];

const ServicesSection: FC = () => (
  <section id="services" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-semibold">What We Do</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="space-y-4 text-center">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
