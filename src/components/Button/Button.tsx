import React from 'react';
import './Button.css';

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
      style={{ ...props?.style }}
      className="button"
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
