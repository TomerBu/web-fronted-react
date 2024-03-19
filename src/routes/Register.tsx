import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onRegister)}>
      <input
        placeholder="firstname"
        type="text"
        {...register("firstname", {
          required: "This field is mandatory",
          minLength: { value: 2, message: "Too short" },
          maxLength: { value: 255, message: "Too long" },
        })}
      />
      {errors.firstname && (
        <p className="text-red-500">{errors.firstname.message as string}</p>
      )}

      <input
        placeholder="lastname"
        type="text"
        {...register("lastname", {
          required: "This field is mandatory",
          minLength: { value: 2, message: "Too short" },
          maxLength: { value: 255, message: "Too long" },
        })}
      />
      {errors.lastname && (
        <p className="text-red-500">{errors.lastname.message as string}</p>
      )}

      <input
        placeholder="age"
        type="number"
        {...register("age", {
          required: "This field is mandatory",
          min: { value: 2, message: "You must be at least 2 years old" },
          max: { value: 130, message: "You can't be older than 130 years old" },
        })}
      />
      {errors.age && (
        <p className="text-red-500">{errors.age.message as string}</p>
      )}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
