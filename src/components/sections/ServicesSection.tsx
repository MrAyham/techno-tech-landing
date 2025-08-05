 codex/redesign-services-section-ui-with-3d-effects
import { FC, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AutomationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
  </svg>
);

const BotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v6" />
    <path d="M5 10h14v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8z" />
    <path d="M2 12h20" />
    <path d="M8 16h0" />
    <path d="M16 16h0" />
  </svg>
);

const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 0 0 20" />
    <path d="M12 2a15 15 0 0 1 0 20" />
  </svg>
);

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="11" width="4" height="10" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);

const MobileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

const services = [
  {
    icon: AutomationIcon,
    title: 'Smart Business Automation',
    description: 'Automating operations for small/medium businesses using AI tools.',
  },
  {
    icon: BotIcon,
    title: 'AI Integration & Custom Bots',
    description: 'Building intelligent assistants, automations & custom workflows.',
  },
  {
    icon: GlobeIcon,
    title: 'Web Platforms & Dashboards',
    description: 'Creating modern, fast, and responsive web platforms with admin panels.',
  },
  {
    icon: ChartIcon,
    title: 'Data Visualization & Reporting',
    description: 'Interactive dashboards & insights powered by real-time data.',
  },
  {
    icon: MobileIcon,
    title: 'Mobile-ready Interfaces',
    description: 'UI/UX optimized for all screen sizes.',

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
 main
  },
];

const ServicesSection: FC = () => (
 codex/redesign-services-section-ui-with-3d-effects
  <section className="bg-neutral-50 py-24 dark:bg-neutral-950" id="services">
    <div className="mx-auto mb-12 max-w-5xl px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">Our Services</h2>
      <p className="text-neutral-600 dark:text-neutral-300">
        We blend artificial intelligence with modern engineering to build powerful solutions.
      </p>
    </div>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
            style={{ perspective: 1000 }}
          >
            <Card className="group h-full bg-black text-white transition-colors duration-300 hover:bg-red-900/40">
              <CardHeader className="space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-800 to-amber-500 text-white shadow-inner transition-transform group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-amber-400">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-300">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}

  <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="mx-auto mb-12 max-w-5xl px-4 text-center">
      <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">What We Do</h2>
      <p className="text-gray-600 dark:text-gray-300">
        From automation to custom software, we build tools that transform how businesses operate.
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full dark:bg-gray-800">
            <CardHeader className="space-y-4 text-center">
              {service.icon}
              <CardTitle className="text-gray-900 dark:text-white">{service.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
main
    </div>
  </section>
);

export default ServicesSection;
 codex/redesign-services-section-ui-with-3d-effects
 main
