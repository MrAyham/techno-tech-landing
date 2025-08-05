import { FC, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Label from '../ui/Label';

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <h3 className="mb-6 text-center text-3xl font-semibold">Get in Touch</h3>
        <div className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <MailIcon className="h-5 w-5 text-[#6d071a]" />
            <span>hello@technotech.com</span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-[#6d071a]" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-[#6d071a]" />
            <span>123 Tech Street, Innovation City</span>
          </div>
        </div>
        {submitted ? (
          <p className="text-center text-green-600">Message sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Full Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={4} placeholder="Your message" />
            </div>
            <Button
              type="submit"
              className="shadow-md transition-shadow hover:shadow-lg"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
