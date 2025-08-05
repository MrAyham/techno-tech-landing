import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}
export const Card = ({ className = '', ...props }: CardProps) => (
  <div
    className={`rounded-xl border border-red-800/20 bg-white text-black shadow-md dark:border-red-800/40 dark:bg-neutral-900 dark:text-white ${className}`}
    {...props}
  />
);

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const CardHeader = ({ className = '', ...props }: CardHeaderProps) => (
  <div className={`p-6 ${className}`} {...props} />
);

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle = ({ className = '', ...props }: CardTitleProps) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props} />
);

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export const CardContent = ({ className = '', ...props }: CardContentProps) => (
  <div className={`px-6 pb-6 ${className}`} {...props} />
);

export default Card;
