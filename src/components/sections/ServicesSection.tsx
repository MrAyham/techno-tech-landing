import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

v1kezo-codex/add-servicessection-component

m666wy-codex/create-servicessection-component
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
            
 codex/create-servicessection-component
 main
interface ServiceItem {
  Icon: (props: { className?: string }) => JSX.Element;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    Icon: GlobeIcon,
    title: 'Smart Web Platforms',
    description:
      'We design and build tailored web apps that automate business tasks and boost efficiency.',
  },
  {
    Icon: WorkflowIcon,
    title: 'Business Automation',
    description:
      'From invoices to inventory, we build AI-powered tools that save time and reduce errors.',
  },
  {
    Icon: CpuIcon,
    title: 'AI Integration & Consulting',
    description:
      'Unlock the power of artificial intelligence in your business with our custom solutions.',
  },
];

const ServicesSection: FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-semibold">What We Do</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map(({ Icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            v1kezo-codex/add-servicessection-component
            <Card className="h-full text-center">
              <CardHeader>
                <Icon className="mx-auto mb-4 h-12 w-12 text-[#6d071a]" />
                <CardTitle className="mb-2 text-xl">{title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Icon className="mx-auto mb-4 h-12 w-12 text-[#6d071a]" />
            <h3 className="mb-2 text-xl font-medium">{title}</h3>
            <p className="text-gray-600">{description}</p>
main
main
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

 v1kezo-codex/add-servicessection-component
// Inline Lucide-style icons
function GlobeIcon({ className }: { className?: string }) {
m666wy-codex/create-servicessection-component

function BrainCogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3a2 2 0 0 0-2 2v1a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.73V14a2 2 0 0 0 2 2h1" />
      <path d="M15 3a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v1" />
      <path d="M15 21v-2a2 2 0 0 0-2-2h-2" />
      <path d="M22 17h-1.26a4 4 0 0 1-.74 1.26l.89.89-1.42 1.42-.89-.89A4 4 0 0 1 17 22v-1.26a4 4 0 0 1-1.26-.74l-.89.89-1.42-1.42.89-.89A4 4 0 0 1 13 17h-1" />
      <path d="M16 16h.01" />

const ServicesSection: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12">
          Solutions designed to keep your business ahead.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <Icon className="mb-4 h-12 w-12 text-[#6d071a]" />
              <h3 className="mb-2 text-xl font-medium">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// Inline SVG icons mimicking Lucide style
function CpuIcon({ className }: { className?: string }) {
main
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6" />
      <path d="M18 9v6" />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
    </svg>
  );
}

v1kezo-codex/add-servicessection-component

main
      main
main
