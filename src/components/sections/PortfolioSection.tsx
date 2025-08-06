import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import Button from '@/components/ui/Button';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'An innovative solution for task management.',
  },
  {
    title: 'Beta Dashboard',
    description: 'Modern dashboard for tracking metrics and analytics.',
  },
  {
    title: 'Gamma Platform',
    description: 'A scalable e-commerce platform built for growth.',
  },
];

const PortfolioSection: FC = () => (
  <section id="portfolio" className="bg-white py-16 dark:bg-gray-900">
    <div className="mx-auto mb-12 max-w-5xl px-4 text-center">
      <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
        Our Work
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        A showcase of some of our recent projects.
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800">
            <img
              src="/assets/logo-techno-tech.png"
              alt="Techno Tech logo"
              className="h-40 w-full object-contain bg-gray-200 p-4"
            />
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>View More</Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;

