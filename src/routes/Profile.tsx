const Profile = () => {
  const userId = localStorage.getItem("user_id") ?? "no user id";

//   TODO: after the break - use JWT to access data

  return <div>{localStorage.getItem("user_id") ?? "no user id"} </div>;
};

export default Profile;
