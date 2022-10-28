import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./style.css" 

import Card from "../../components/card/card";
import Header from "../../components/header";
import useAuth from "../../routers/useAuthHook/useAuth";

const Home = () => {
  const [data, setData] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <React.Fragment key={1}>
      <Header
        title="PROcode"
        auth={auth}
        onclickProfile={handleProfileClick}
        onClickLogin={handleLoginClick}
        onclickHome={handleHomeClick}
      />
      <div className="main_content_card">
        {data.map((item, i) => {
          return (
            <div className="card-contairen-home">
              <Card data={item} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
