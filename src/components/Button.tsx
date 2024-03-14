import { FC } from "react";

type ButtonProps = {
  text: string;
};

const Button: FC<ButtonProps> = ({ text}) => {
  return (
    <button className="bg-purple-500 text-white rounded p-5 text-2xl mb-2">
      {text}
    </button>
  );
};

export default Button;
