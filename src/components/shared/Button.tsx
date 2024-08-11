import React from "react";
import "./Button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button = ({ disabled = false, className, ...props }: ButtonProps) => {
  return (
    <button disabled={disabled} className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
