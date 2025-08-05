import { FC, useEffect, useState } from 'react';
import Button from '../ui/Button';

const Header: FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-xl font-bold">Techno Tech</h1>
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
