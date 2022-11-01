import React, { useState } from "react";

import Navbar from "../../components/header/navbar/navBar";
import Login from "../../components/login/login";
import SignUP from "../../components/signup/signup";
import useAuth from "../../routers/useAuthHook/useAuth";

import "./style.css";

const LoginScr = () => {
  const [logState, setLogState] = useState(false);
  const clickSignup = () => {
    setLogState(true);
  };
  const clicklogin = () => {
    setLogState(false);
  };
  const auth = useAuth();
  return (
    <>
      <Navbar auth={auth} />
      <div className="login_sigup-con">
        <div className="login-option">
          <button
            {...(logState
              ? { className: "optn-btn selected_btn" }
              : { className: "optn-btn" })}
            onClick={clickSignup}
          >
            Sign up
          </button>
          <button
            {...(!logState
              ? { className: "optn-btn selected_btn" }
              : { className: "optn-btn" })}
            onClick={clicklogin}
          >
            login
          </button>
        </div>
        {logState ? <SignUP setLogState={setLogState} /> : <Login />}
      </div>
    </>
  );
};

export default LoginScr;
