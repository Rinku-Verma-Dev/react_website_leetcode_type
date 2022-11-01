import axios from "axios";
import React, { useEffect, useState } from "react";

import "./style.css";

import Card from "../../components/card/card";
import useAuth from "../../routers/useAuthHook/useAuth";
import Navbar from "../../components/header/navbar/navBar";

const Home = () => {
  const [data, setData] = useState([]);
  const auth = useAuth();

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
      <Navbar title="PROcode" auth={auth} />
      <div className="main_content_card">
        <div></div>
        {data.map((item, i) => {
          return (
            <div className="card-contairen-home" key={i}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
