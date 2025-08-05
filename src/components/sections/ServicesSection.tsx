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
  },
];

const ServicesSection: FC = () => (
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
    </div>
  </section>
);

export default ServicesSection;
