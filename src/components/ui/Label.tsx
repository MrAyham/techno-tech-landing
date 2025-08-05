import { FC, LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<LabelProps> = ({ className = '', ...props }) => (
  <label
    className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}
    {...props}
  />
);

export default Label;
