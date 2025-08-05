codex/redesign-services-section-ui-with-3d-effects
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

import * as React from 'react';

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border bg-white text-gray-900 shadow dark:bg-gray-800 dark:text-gray-100',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-600 dark:text-gray-300', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

main
