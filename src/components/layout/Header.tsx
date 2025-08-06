import { FC, useEffect, useState } from 'react';
import Button from '../ui/Button';

const Header: FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = typeof document !== 'undefined' ? document.documentElement : null;
    if (!root) return;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <img
          src="/assets/logo-techno-tech.png"
          alt="Techno Tech logo"
          className="h-8"
        />
        <h1 className="text-xl font-bold">Techno Tech</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setDark(!dark)}
          className="rounded p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {dark ? '🌙' : '☀️'}
        </button>
        <Button>Contact</Button>
      </div>
    </header>
  );
};

export default Header;
