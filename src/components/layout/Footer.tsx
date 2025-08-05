import { FC } from 'react';

const Footer: FC = () => (
  <footer className="py-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Techno Tech
  </footer>
);

export default Footer;
