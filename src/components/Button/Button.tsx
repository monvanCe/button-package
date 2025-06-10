import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      style={{ border: '1px solid red', ...props?.style }}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
