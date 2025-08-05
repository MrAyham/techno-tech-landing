import { FC } from 'react';
const Header: FC = () => (
  <header className="flex justify-between items-center py-4">
    <img src="/assets/logo.svg" alt="Techno Tech logo" className="h-10" />
    <a
      href="#contact"
      className="px-6 py-3 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none"
    >
      Contact
    </a>
  </header>
);

export default Header;
