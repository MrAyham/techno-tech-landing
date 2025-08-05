import { FC, PropsWithChildren } from 'react';

const Button: FC<PropsWithChildren> = ({ children }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded">
    {children}
  </button>
);

export default Button;
