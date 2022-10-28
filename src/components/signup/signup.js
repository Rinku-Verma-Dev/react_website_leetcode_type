import React, { useRef, useState } from "react";
import axios from "axios";

import "./style.css";
import { useNavigate } from "react-router";

const SignUP = ({setLogState}) => {
  const fName = useRef();
  const lName = useRef();
  const email = useRef();
  const password = useRef();

  const [errStatus, setErrStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    axios
      .post("http://localhost:5000/signup", {
        fName: fName?.current?.value,
        lName: lName?.current?.value,
        email: email?.current?.value,
        password: password?.current?.value,
      })
      .then((res) => {
        if (res.statusText === "OK") {
          setErrStatus(false);
          // setLogState(false);
          navigation("/profile");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrStatus(true);
        setErrorMessage(err.response.data.message);
        console.log("<<<<<<<", errStatus);
      });
  };

  return (
    <div className="signup_form-wrapper">
      <form className="signup-wrapper" onSubmit={handleSubmit}>
        {errStatus && <div className="errorMessage">{errorMessage}</div>}
        <div className="input">
          <label>
            First Name <span className="required">*</span>
          </label>
          <br />
          <input
            className="in-fName"
            type="text"
            placeholder="First Name"
            ref={fName}
            required
          />
          <label>
            Last Name <span className="required">*</span>
          </label>
          <br />
          <input
            className="in-lName"
            type="text"
            placeholder="Last Name"
            ref={lName}
            required
          />
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

export default SignUP;
