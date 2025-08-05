import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Business Owner',
    initial: 'S',
    text:
      'Techno Tech transformed our operations with their automation solutions. The team was supportive from start to finish and delivered beyond expectations.',
  },
  {
    name: 'John D.',
    role: 'Startup Founder',
    initial: 'J',
    text:
      'Working with Techno Tech has been a game changer for our startup. Their expertise helped us streamline processes and focus on growth.',
  },
  {
    name: 'Emily R.',
    role: 'Marketing Lead',
    initial: 'E',
    text:
      'The custom tools they built saved us countless hours. Their attention to detail and commitment to quality are unmatched.',
  },
];

const TestimonialsSection: FC = () => (
  <section id="testimonials" className="bg-white py-24 dark:bg-gray-900">
    <div className="mx-auto mb-12 max-w-5xl px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, index) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-800 to-amber-500 text-2xl font-bold text-white">
                {t.initial}
              </div>
              <CardTitle>{t.name}</CardTitle>
              <CardDescription>{t.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">{t.text}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;

