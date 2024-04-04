import { useEffect, useState } from "react";
import auth from "../services/auth";
import { RegisterUser } from "../@types/types";

const Profile = () => {
  const userId = localStorage.getItem("user_id") ?? "no user id";
  const [user, setUser] = useState<RegisterUser>();

  useEffect(() => {
    auth
      .userDetails(userId)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  
  return (
    <div>
      <h2>
        {user?.name.first} {user?.name.middle} {user?.name.last}
      </h2>
    </div>
  );
};

export default Profile;
