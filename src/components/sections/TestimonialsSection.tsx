import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Business Owner',
    avatar: 'https://via.placeholder.com/64',
    text:
      'Techno Tech transformed our operations with their automation solutions. The team was supportive from start to finish and delivered beyond expectations.',
  },
  {
    name: 'John D.',
    role: 'Startup Founder',
    avatar: 'https://via.placeholder.com/64',
    text:
      'Working with Techno Tech has been a game changer for our startup. Their expertise helped us streamline processes and focus on growth.',
  },
  {
    name: 'Emily R.',
    role: 'Marketing Lead',
    avatar: 'https://via.placeholder.com/64',
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
              <img
                src={t.avatar}
                alt={t.name}
                className="mb-4 h-16 w-16 rounded-full object-cover"
              />
              <CardTitle>{t.name}</CardTitle>
              <CardDescription>{t.role}</CardDescription>
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
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

