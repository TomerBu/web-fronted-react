import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, control, formState } = useForm();

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <input type="text" {...register("firstname")} />
      <input type="text" {...register("lastname")} />
      <input type="number" {...register("age")} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

/*
 
const url = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

const json = {
  name: {
    first: "Ell",
    middle: "",
    last: "Vis",
  },
  phone: "0512345567",
  email: "MikeBanana@email.com",
  password: "Abc!123Abc",
  image: {
    url: "",
    alt: "",
  },
  address: {
    state: "IL",
    country: "Israel",
    city: "Arad",
    street: "Shoham",
    houseNumber: 5,
    zip: 8920435,
  },
  isBusiness: true,
};

axios.post(url, json)
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(json),
// });
 */
