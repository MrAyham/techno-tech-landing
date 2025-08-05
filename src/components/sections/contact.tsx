import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^[+\d][\d\s()-]{7,}$/i.test(val),
        { message: 'Please enter a valid phone number.' }
      ),
    message: z
      .string()
      .min(10, { message: 'Message must be at least 10 characters.' }),
  });

  type ContactFormData = z.infer<typeof formSchema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = () => {
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="flex justify-center py-16 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800">
        {submitted ? (
          <p className="text-center text-green-600">Message sent successfully!</p>
        ) : (
          <>
            <h3 className="mb-2 text-center text-2xl font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h3>
            <p className="mb-6 text-center text-gray-600 dark:text-gray-300">We’d love to hear from you. Whether you’re curious about features, a free trial, or even press—we’re ready to answer any and all questions.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="shadow-sm transition-shadow hover:shadow-md">
                  Send Message ✉️
                </Button>
              </form>
            </Form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
