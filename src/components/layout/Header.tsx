import { FC } from 'react';
import Button from '../ui/Button';

const Header: FC = () => (
  <header className="flex justify-between items-center py-4">
    <h1 className="text-xl font-bold">Techno Tech</h1>
    <Button>Contact</Button>
  </header>
);

export default Header;
