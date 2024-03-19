import axios from "axios";

const Register = () => {
  // axios = http ספריה שמפשטת עבודה עם 
  // איך יוצרים טופס ידנית בלי ספריה
  // בד"כ נשתמש בספריה כדי לפשט את הטופס

  return <div>Register</div>;
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