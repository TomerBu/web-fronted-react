import { useState } from "react";

const Register = () => {
  const [first, setFirst] = useState<string>();
  const [firstErr, setFirstErr] = useState<string>();

  const onRegister = () => {
    if (!firstErr) {
      alert(`You entered ${first}`);
    }else{
      alert('fill the form')
    }
  };
  return (
    <form>
      <input
        onChange={(e) => {
          const first = e.target.value;
          if (!first) {
            setFirstErr("name must not be empty");
            return;
          }
          if (first.length < 2 || first.length > 255) {
            setFirstErr("name must be between 2-255 characters");
            return;
          }
          setFirst(first);
          setFirstErr(null);
        }}
        type="text"
        name="first"
        placeholder="first"
      />
      {firstErr && <p className="text-red-600">{firstErr}</p>}

      <button onClick={onRegister} type="button">
        Register
      </button>
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
