import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
