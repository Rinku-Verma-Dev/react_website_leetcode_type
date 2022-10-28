import React from "react";
import { useNavigate } from "react-router";

import Header from "../header";

const Profile = () => {
  const navigate = useNavigate(); 
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };
  return (
    <>
      <Header 

handleProfileClick={handleProfileClick}
handleHomeClick={handleHomeClick}
      />
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
