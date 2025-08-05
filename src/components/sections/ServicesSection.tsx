import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

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
            <Card className="h-full text-center">
              <CardHeader>
                <Icon className="mx-auto mb-4 h-12 w-12 text-[#6d071a]" />
                <CardTitle className="mb-2 text-xl">{title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

// Inline Lucide-style icons
function GlobeIcon({ className }: { className?: string }) {
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

