import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-purple-500 text-white rounded p-5 text-2xl mb-2"
    >
      {text}
    </button>
  );
};

export default Button;
