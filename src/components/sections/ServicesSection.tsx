import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Service {
  Icon: (props: { className?: string }) => JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
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
      'From invoices to inventory, we build tools that save time and reduce errors.',
  },
  {
    Icon: CpuIcon,
    title: 'AI Integration & Consulting',
    description:
      'Unlock the power of artificial intelligence in your business with our custom solutions.',
  },
];

const ServicesSection: FC = () => (
  <section
    id="services"
    className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
  >
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-semibold">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map(({ Icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center">
              <CardHeader className="space-y-4">
                <Icon className="mx-auto h-12 w-12 text-[#6d071a]" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
    </svg>
  );
}

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <rect x="8" y="17" width="8" height="4" rx="1" />
      <path d="M12 7v10" />
      <path d="M5 11h14" />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v2" />
      <path d="M15 1v2" />
      <path d="M1 9h2" />
      <path d="M1 15h2" />
      <path d="M21 9h2" />
      <path d="M21 15h2" />
      <path d="M9 21v2" />
      <path d="M15 21v2" />
    </svg>
  );
}
