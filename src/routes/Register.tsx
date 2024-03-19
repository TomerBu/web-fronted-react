import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>();

  const onRegister = (data: RegisterUser) => {
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onRegister)}>
      <input
        placeholder="First Name"
        type="text"
        {...register("name.first", {
          required: "This field is mandatory",
          minLength: { value: 2, message: "Too short" },
          maxLength: { value: 255, message: "Too long" },
        })}
      />
      {errors.name.first && (
        <p className="text-red-500">{errors.name.first.message}</p>
      )}

      <input
        placeholder="Last Name"
        type="text"
        {...register("name.last", {
          required: "This field is mandatory",
          minLength: { value: 2, message: "Too short" },
          maxLength: { value: 255, message: "Too long" },
        })}
      />
      {errors.name.last && (
        <p className="text-red-500">{errors.name.last.message as string}</p>
      )}

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
