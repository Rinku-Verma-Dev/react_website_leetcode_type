import React, { useRef, useState } from "react";
import axios from "axios";

import "./style.css";
import { useNavigate } from "react-router";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [errStatus, setErrStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        email: email?.current?.value,
        password: password?.current?.value,
      })
      .then((res) => {
        if (res.statusText === "OK") {
          setErrStatus(false);
          console.log(">>res", res);
          localStorage.setItem("token", res?.data?.accessToken);
          navigation("/profile");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setErrStatus(true);
        setErrorMessage(err.response.data.message);
        console.log("<<<<<<<", errStatus);
      });
  };

  return (
    <div className="login_form-wrapper">
      {console.log(">>>>>>>>>>>", errStatus)}
      <form className="login-wrapper" onSubmit={handleSubmit}>
        {errStatus && <div className="errorMessage">{errorMessage}</div>}
        <div className="input">
          <label>
            Email <span className="required">*</span>
          </label>
          <br />
          <input
            className="in-email"
            type="email"
            placeholder="Enter your Email.."
            ref={email}
            required
          />
          <label>
            Password <span className="required">*</span>
          </label>
          <br />
          <input
            className="in-pass"
            type="password"
            ref={password}
            placeholder="Enter your Email.."
            required
          />
        </div>
        <div className="submit-buttion">
          <button className="sub-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Login);
