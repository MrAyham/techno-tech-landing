import { FC } from 'react';
import logo from '../../assets/logo.svg';
import Button from '../ui/Button';

const Hero: FC = () => (
  <section className="text-center py-16">
    <img src={logo} alt="Techno Tech logo" className="mx-auto mb-8 w-32" />
    <h2 className="mb-4 text-3xl font-semibold">Welcome to Techno Tech</h2>
    <p className="mb-6 text-gray-600">Building modern web experiences.</p>
    <Button>Get Started</Button>
  </section>
);

export default Hero;
