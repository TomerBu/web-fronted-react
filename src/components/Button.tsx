import { FC } from "react";

type ButtonProps = {
  text: string;
  color?: string;
};

const Button: FC<ButtonProps> = ({ text, color }) => {
  return <div style={{ backgroundColor: color }}>{text}</div>;
};

export default Button;


