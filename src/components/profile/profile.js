import React from "react";

import Navbar from "../header/navbar/navBar";
import useAuth from "../../routers/useAuthHook/useAuth";

const Profile = () => {
  const auth = useAuth();
  return (
    <>
      <Navbar auth={auth} />
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
