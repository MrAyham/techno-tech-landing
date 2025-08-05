import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary';
}

const Button: FC<ButtonProps> = ({ variant = 'default', className = '', ...props }) => {
  const base =
    'px-6 py-3 rounded-md font-medium transition-colors transition-transform focus:outline-none hover:scale-105 active:scale-95';
  const variants: Record<'default' | 'secondary', string> = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'border border-white text-white hover:bg-white/10',
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
};

export default Button;
