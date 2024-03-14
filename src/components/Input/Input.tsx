import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";
import { CiCircleCheck, CiCircleRemove} from 'react-icons/ci';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input {...props}  />
      <CiCircleRemove color="red" size={50} />
      <CiCircleCheck color="green" size={50} />
    </div>
  );
};

export default Input;
