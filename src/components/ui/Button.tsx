import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary';
}

const Button: FC<ButtonProps> = ({ variant = 'default', className = '', ...props }) => {
  const base =
    'px-6 py-3 rounded-md font-medium focus:outline-none transition-colors duration-300 shadow-md hover:shadow-lg';
  const variants: Record<'default' | 'secondary', string> = {
    default: 'bg-[#6d071a] text-white hover:bg-[#540515]',
    secondary:
      'border border-[#6d071a] text-[#6d071a] hover:bg-[#6d071a] hover:text-white',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
};

export default Button;
