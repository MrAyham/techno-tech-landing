import { FC } from 'react';

const services = [
  {
    icon: '⚡',
    title: 'Workflow Automation',
    description: 'Streamline and automate repetitive tasks with smart triggers and logic.',
  },
  {
    icon: '🧩',
    title: 'AI Chatbots',
    description: 'Provide 24/7 support and intelligent conversations with trained bots.',
  },
  {
    icon: '📊',
    title: 'Business Dashboards',
    description: 'Real-time metrics and analytics to drive better decisions.',
  },
  {
    icon: '🔒',
    title: 'Secure Web Applications',
    description: 'Scalable, fast, and secure platforms customized for your business.',
  },
];

const Services: FC = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="mx-auto mb-12 max-w-5xl px-4 text-center">
      <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">What We Offer</h2>
      <p className="text-gray-600 dark:text-gray-300">
        From automation to custom software, we build tools that transform how businesses operate.
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      {services.map((service) => (
        <div
          key={service.title}
          className="relative rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800"
        >
          <div className="mb-4 text-4xl">{service.icon}</div>
          <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;

