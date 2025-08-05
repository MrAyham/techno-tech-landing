import { FC, FormEvent, useState } from 'react';
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
    <section id="contact" className="flex justify-center py-16 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800">
        {submitted ? (
          <p className="text-center text-green-600">Message sent successfully!</p>
        ) : (
          <>
            <h3 className="mb-2 text-center text-2xl font-semibold text-gray-900 dark:text-white">Get in Touch</h3>
            <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
              We’d love to hear from you. Whether you’re curious about features, a free trial, or even press—we’re ready to answer any and all questions.
            </p>
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
              <Button type="submit" className="shadow-sm transition-shadow hover:shadow-md">Send Message</Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
