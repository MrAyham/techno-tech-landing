import { FC } from 'react';
import { motion } from 'framer-motion';

 codex/create-servicessection-component
interface ServiceItem {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    Icon: BrainCogIcon,

const services = [
  {
    icon: CpuIcon,
 main
    title: 'AI Integration',
    description: 'Empower your business with AI-powered decisions.',
  },
  {
 codex/create-servicessection-component
    Icon: RepeatIcon,

    icon: WorkflowIcon,
    main
    title: 'Business Automation',
    description: 'Automate repetitive tasks and boost productivity.',
  },
  {
 codex/create-servicessection-component
    Icon: GlobeIcon,

    icon: GlobeIcon,
 main
    title: 'Smart Web Apps',
    description: 'Custom web platforms tailored to your needs.',
  },
];

codex/create-servicessection-component
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
 main
    </svg>
  );
}

codex/create-servicessection-component
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
 main
    </svg>
  );
}

      codex/create-servicessection-component
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
 main
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
 codex/create-servicessection-component


main
