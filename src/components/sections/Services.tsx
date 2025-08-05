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
  <section className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto text-center mb-12 px-4">
      <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
      <p className="text-gray-600">
        From automation to custom software, we build tools that transform how businesses operate.
      </p>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {services.map((service) => (
        <div
          key={service.title}
          className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="mb-2 font-bold">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;

