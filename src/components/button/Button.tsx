import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
};

const Button = ({ children, onClick, disabled, type }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
