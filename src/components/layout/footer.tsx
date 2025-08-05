import { FC } from 'react';
import logo from '../../assets/logo.svg';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

const Footer: FC = () => (
  <footer className="mt-24 bg-[#0f0f0f] text-gray-400 font-sans">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Techno Tech logo" className="h-8" />
          <span className="font-semibold text-white">Techno Tech</span>
        </div>
        <ul className="flex flex-col items-center gap-4 md:flex-row">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8 text-center text-sm text-gray-500">
        © 2025 Techno Tech Inc. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

