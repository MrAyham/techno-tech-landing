import { FC } from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    Icon: BrainCogIcon,
    title: 'AI Integration',
    description: 'Empower your business with AI-powered decisions.',
  },
  {
    Icon: RepeatIcon,
    title: 'Business Automation',
    description: 'Automate repetitive tasks and boost productivity.',
  },
  {
    Icon: GlobeIcon,
    title: 'Smart Web Apps',
    description: 'Custom web platforms tailored to your needs.',
  },
];

const ServicesSection: FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-semibold">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map(({ Icon, title, description }) => (
          <motion.div
            key={title}
            className="rounded-lg bg-white p-6 text-center shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="mx-auto mb-4 h-12 w-12 text-[#6d071a]" />
            <h3 className="mb-2 text-xl font-medium">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

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
    </svg>
  );
}

function RepeatIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

