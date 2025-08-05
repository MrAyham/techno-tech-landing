import { FC, HTMLAttributes } from 'react';

export const Card: FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  ...props
}) => (
  <div className={`rounded-lg border bg-white shadow-md ${className}`} {...props} />
);

export const CardHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  ...props
}) => <div className={`p-6 ${className}`} {...props} />;

export const CardTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  ...props
}) => (
  <h3
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
);

export const CardDescription: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  ...props
}) => (
  <p className={`text-sm text-gray-600 ${className}`} {...props} />
);

export default Card;
