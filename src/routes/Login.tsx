import { useForm } from "react-hook-form";
import { LoginUser } from "../@types/types";
import patterns from "../validation/patterns";
import auth from "../services/auth";
import dialogs from "../ui/dialogs";

const Login = () => {
  // function that is invoked after successful submission:
  const onLogin = (data: LoginUser) => {
  
    auth
      .login(data)
      .then((res) => {
        // save the jwt
        localStorage.setItem('jwt', res.data);
        console.log(res.data);
      })
      .catch((e) => {
        dialogs.error("Login Error", e.response.data);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();

  return (
    <div>
      <h2>Login Page</h2>
      <form noValidate onSubmit={handleSubmit(onLogin)}>
        {/* email */}
        <section>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "This field is mandatory",
              pattern: patterns.email,
            })}
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </section>

        {/* password */}
        <section>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "This field is mandatory",
              pattern: patterns.password,
            })}
          />
          {errors.password && <p>{errors.password?.message}</p>}
        </section>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
