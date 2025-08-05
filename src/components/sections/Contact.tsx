import { FC } from 'react';

const Contact: FC = () => (
  <section id="contact" className="py-16 flex justify-center">
    <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md text-center space-y-4">
      <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
      <p>
        <a href="mailto:technoartsy@gmail.com" className="text-blue-600 hover:underline">
          technoartsy@gmail.com
        </a>
      </p>
      <p>
        <a href="tel:+12267240542" className="text-blue-600 hover:underline">
          +1 (226) 724-0542
        </a>
      </p>
      <p>Windsor, Ontario, Canada</p>
      <p>Website: Coming Soon</p>
    </div>
  </section>
);

export default Contact;
