import { FC } from 'react';
import logo from '../../assets/logo.svg';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Footer: FC = () => (
  <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-gray-600 dark:bg-[#0f0f0f] dark:text-gray-400">
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Techno Tech logo" className="h-8" />
          <span className="font-semibold text-gray-900 dark:text-white">Techno Tech</span>
        </div>
        <ul className="flex flex-col items-center gap-4 md:flex-row">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center text-sm md:text-right">
          <p>
            <a
              href="mailto:info@technotech.com"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              info@technotech.com
            </a>
          </p>
          <p>
            <a
              href="tel:+15551234567"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              +1 (555) 123-4567
            </a>
          </p>
          <p>New York, USA</p>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
        © 2025 Techno Tech. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

