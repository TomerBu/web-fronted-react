import { FC, ButtonHTMLAttributes } from "react";
import './Button.scss';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "primary" | "info";
}

const Button: FC<ButtonProps> = ({ text, variant = "primary", ...rest }) => {
  //variant = variant ?? "primary";
  return (
    <button
      {...rest}
      className={`button-${variant}`}
    >
      {text}
    </button>
  );
};

export default Button;