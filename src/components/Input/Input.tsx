import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
 
  return (
    <div className="input-container">
      <label>{props.placeholder}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
