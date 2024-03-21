import { useForm } from "react-hook-form";
import { LoginUser } from "../@types/types";

const Login = () => {
  
  // function that is invoked after successful submission:
  function onLogin(data: LoginUser) {}

  const {register, handleSubmit, formState:{errors}} = useForm<LoginUser>();
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit(onLogin)}>
          {/* email */}
          <section></section>

          {/* password */}
          <section></section>

          <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
