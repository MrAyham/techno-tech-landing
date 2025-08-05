import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Workflow,
  Bot,
  Globe,
  BarChart3,
  Smartphone,
  LucideIcon,
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    icon: Workflow,
    title: 'Smart Business Automation',
    description: 'Automating operations for small and medium businesses using AI tools.',
  },
  {
    icon: Bot,
    title: 'AI Integration & Custom Bots',
    description: 'Building intelligent assistants, automations and custom workflows.',
  },
  {
    icon: Globe,
    title: 'Web Platforms & Dashboards',
    description: 'Creating modern, fast and responsive platforms with admin panels.',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization & Reporting',
    description: 'Interactive dashboards and insights powered by real-time data.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-ready Interfaces',
    description: 'UI/UX optimized for all screen sizes.',
  },
];

const ServicesSection: FC = () => (
  <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="mx-auto mb-12 max-w-5xl px-4 text-center">
      <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
        What We Do
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        From automation to custom software, we build tools that transform how businesses
        operate.
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full dark:bg-gray-800">
              <CardHeader className="space-y-4 text-center">
                <Icon className="mx-auto h-10 w-10 text-[#6d071a]" />
                <CardTitle className="text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default ServicesSection;

