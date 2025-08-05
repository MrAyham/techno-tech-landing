import { FC, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ${className}`}
      {...props}
    />
  );
};

export default Textarea;
