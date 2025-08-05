import { FC } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: FC = () => (
  <section id="contact" className="bg-gray-50 py-24 dark:bg-gray-900">
    <div className="mx-auto max-w-5xl px-4 text-center">
      <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <Mail className="mr-2 h-6 w-6 text-red-600" />
          <a href="mailto:technoartsy@gmail.com" className="hover:underline">
            technoartsy@gmail.com
          </a>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <Phone className="mr-2 h-6 w-6 text-red-600" />
          <a href="tel:+12267240542" className="hover:underline">
            +1 (226) 724-0542
          </a>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <MapPin className="mr-2 h-6 w-6 text-red-600" />
          <span>Windsor, Ontario, Canada</span>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;

